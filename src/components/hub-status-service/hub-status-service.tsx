import { Component, Host, Prop, h } from '@stencil/core';
import { getStatusDisplay } from '../../utils/status';

@Component({
  tag: 'hub-status-service',
  styleUrl: 'hub-status-service.css',
  shadow: true,
})
export class HubStatusService {

  /**
   * 
   * {
            "title": "Hub Sites",
            "Status": "normal"
        }
   */
  @Prop() service: any = null;

  render() {
    return (
      <Host>
        <slot></slot>
        <calcite-notice 
            open 
            id="status-notice" 
            icon={getStatusDisplay(this.service?.status).icon}
            width="full" 
            scale="m" 
            kind="success">
          <div id="status-title" slot="title">
            {this.service?.title}
          </div>
          {/* <div id="status-message" slot="message">
            {this.status?.message}
          </div> */}
          {/* <calcite-link 
            href="http://support.esri.com/contact-tech-support" 
            slot="link" 
            title="my action">Report an Issue</calcite-link> */}
        </calcite-notice>
      </Host>
    );
  }

}
