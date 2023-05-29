import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'hub-status-service-list',
  styleUrl: 'hub-status-service-list.css',
  shadow: true,
})
export class HubStatusServiceList {

  /**
   * 
   * "services": [
        {
            "title": "Hub Sites",
            "Status": "normal"
        },
        {
            "title": "Search API",
            "Status": "normal"
        },
        {
            "title": "Content Indexer",
            "Status": "normal"
        },
        {
            "title": "Downloads",
            "Status": "normal"
        },
        {
            "title": "Discussions",
            "Status": "normal"
        }
    ],
   */
  @Prop() services: any = null;

  render() {
    console.debug("services", this.services)
    return (
      <Host>
        <slot></slot>
        <div class="services-list">
        {this.services.map((service) => {
          return (<hub-status-service 
            service={service}
          > </hub-status-service>)
        })}
        </div>
      </Host>
    );
  }

}
