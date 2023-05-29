import { Component, Host, State, h } from '@stencil/core';
import { getStatusData } from '../../utils/status';

@Component({
  tag: 'hub-status-view',
  styleUrl: 'hub-status-view.css',
  shadow: true,
})
export class HubStatusView {

  @State() statusData: any;

  async componentWillLoad() {
    this.statusData = await getStatusData('./data/status.json')
    console.debug('statusData', this.statusData)
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <h3>Current Status</h3>
        <hub-status-summary
          status={this.statusData.overview}
        > </hub-status-summary>

        <h3>Details</h3>
        <hub-status-service-list
          services={this.statusData.services}
        > </hub-status-service-list>

        <h3>History</h3>
        <hub-status-history
          history={this.statusData.history}
        > </hub-status-history>
      </Host>
    );
  }

}
