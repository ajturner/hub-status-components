import { Component, Host, Prop, h } from '@stencil/core';
import { getStatusDisplay } from '../../utils/status';
import "@esri/calcite-components/dist/components/calcite-notice";

import { setAssetPath } from "@esri/calcite-components/dist/components";
// CDN hosted assets
setAssetPath("https://js.arcgis.com/calcite-components/1.4.0/assets");

@Component({
  tag: 'hub-status-summary',
  styleUrl: 'hub-status-summary.css',
  shadow: true,
})
export class HubStatusSummary {

  /**
   * 
   * {
          "status": "normal",
          "title": "All Good. Systems are running as expected!",
          "message": "There are no known outages for ArcGIS Hub. Notice Something?"
      }
   */
  @Prop() status: any = null;

  render() {
    return (
      <Host>
        <slot></slot>
        <em id="current-timestamp"></em>
        <calcite-notice 
            open 
            id="status-notice" 
            icon={getStatusDisplay(this.status?.status).icon} 
            width="full" 
            scale="m" 
            kind="success">
          <div id="status-title" slot="title">
            {this.status?.title}
          </div>
          <div id="status-message" slot="message">
            {this.status?.message}
          </div>
          <calcite-link 
            href="http://support.esri.com/contact-tech-support" 
            slot="link" 
            title="my action">Report an Issue</calcite-link>
        </calcite-notice>
      </Host>
    );
  }

}
