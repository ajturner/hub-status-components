/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HubChangelog {
        /**
          * Array of status change events  { "versions": {    "2023-05-20T17:33:00Z": {        "added": [            {"text": "[Beta] Search results can now be filtered by source"},            {"text": "[Beta] Search results may now be filtered by license"},            {"text": "Updated translation strings"}        ],        "changed": [            {"text": "Updated translation strings"}        ],        "fixed": [            {"text": "Fixed popover positioning under side panel tab controls"},            {"text": "Fixed an issue where selecting a Discussions graphic on the map while one is already selected did not unselect the previous graphic"},            {"text": "Updated CSS selector to apply underlined links on 404 pages"},            {"text": "[Beta] Fixed issue where the experimental map filter stopped working on the new search route (/explore) after the route had switched to using the OGC API"},            {"text": "Removed pluralized strings for language support due to problematic translation support in browsers"},            {"text": "Fixed issue where selecting a dataset from the global nav search while on a dataset page would break the map"}        ]    } } }
         */
        "changelogUrl": any;
        /**
          * Number of days history to show
         */
        "days": number;
    }
    interface HubStatusHistory {
        /**
          * Number of days history to show
         */
        "days": number;
        /**
          * Array of status change events  "history": { "2023-02-10T17:33:00Z": {        "message": "Hub sites are operating as expected for all customers.",        "status": "normal" }, "2023-02-10T17:15:00Z": {        "message": "Hub sites were not available for customers.",        "status": "degraded" },
         */
        "history": any;
    }
    interface HubStatusService {
        /**
          * {        "title": "Hub Sites",        "Status": "normal"    }
         */
        "service": any;
    }
    interface HubStatusServiceList {
        /**
          * "services": [    {        "title": "Hub Sites",        "Status": "normal"    },    {        "title": "Search API",        "Status": "normal"    },    {        "title": "Content Indexer",        "Status": "normal"    },    {        "title": "Downloads",        "Status": "normal"    },    {        "title": "Discussions",        "Status": "normal"    } ],
         */
        "services": any;
    }
    interface HubStatusSummary {
        /**
          * {      "status": "normal",      "title": "All Good. Systems are running as expected!",      "message": "There are no known outages for ArcGIS Hub. Notice Something?"  }
         */
        "status": any;
    }
    interface HubStatusView {
    }
}
declare global {
    interface HTMLHubChangelogElement extends Components.HubChangelog, HTMLStencilElement {
    }
    var HTMLHubChangelogElement: {
        prototype: HTMLHubChangelogElement;
        new (): HTMLHubChangelogElement;
    };
    interface HTMLHubStatusHistoryElement extends Components.HubStatusHistory, HTMLStencilElement {
    }
    var HTMLHubStatusHistoryElement: {
        prototype: HTMLHubStatusHistoryElement;
        new (): HTMLHubStatusHistoryElement;
    };
    interface HTMLHubStatusServiceElement extends Components.HubStatusService, HTMLStencilElement {
    }
    var HTMLHubStatusServiceElement: {
        prototype: HTMLHubStatusServiceElement;
        new (): HTMLHubStatusServiceElement;
    };
    interface HTMLHubStatusServiceListElement extends Components.HubStatusServiceList, HTMLStencilElement {
    }
    var HTMLHubStatusServiceListElement: {
        prototype: HTMLHubStatusServiceListElement;
        new (): HTMLHubStatusServiceListElement;
    };
    interface HTMLHubStatusSummaryElement extends Components.HubStatusSummary, HTMLStencilElement {
    }
    var HTMLHubStatusSummaryElement: {
        prototype: HTMLHubStatusSummaryElement;
        new (): HTMLHubStatusSummaryElement;
    };
    interface HTMLHubStatusViewElement extends Components.HubStatusView, HTMLStencilElement {
    }
    var HTMLHubStatusViewElement: {
        prototype: HTMLHubStatusViewElement;
        new (): HTMLHubStatusViewElement;
    };
    interface HTMLElementTagNameMap {
        "hub-changelog": HTMLHubChangelogElement;
        "hub-status-history": HTMLHubStatusHistoryElement;
        "hub-status-service": HTMLHubStatusServiceElement;
        "hub-status-service-list": HTMLHubStatusServiceListElement;
        "hub-status-summary": HTMLHubStatusSummaryElement;
        "hub-status-view": HTMLHubStatusViewElement;
    }
}
declare namespace LocalJSX {
    interface HubChangelog {
        /**
          * Array of status change events  { "versions": {    "2023-05-20T17:33:00Z": {        "added": [            {"text": "[Beta] Search results can now be filtered by source"},            {"text": "[Beta] Search results may now be filtered by license"},            {"text": "Updated translation strings"}        ],        "changed": [            {"text": "Updated translation strings"}        ],        "fixed": [            {"text": "Fixed popover positioning under side panel tab controls"},            {"text": "Fixed an issue where selecting a Discussions graphic on the map while one is already selected did not unselect the previous graphic"},            {"text": "Updated CSS selector to apply underlined links on 404 pages"},            {"text": "[Beta] Fixed issue where the experimental map filter stopped working on the new search route (/explore) after the route had switched to using the OGC API"},            {"text": "Removed pluralized strings for language support due to problematic translation support in browsers"},            {"text": "Fixed issue where selecting a dataset from the global nav search while on a dataset page would break the map"}        ]    } } }
         */
        "changelogUrl"?: any;
        /**
          * Number of days history to show
         */
        "days"?: number;
    }
    interface HubStatusHistory {
        /**
          * Number of days history to show
         */
        "days"?: number;
        /**
          * Array of status change events  "history": { "2023-02-10T17:33:00Z": {        "message": "Hub sites are operating as expected for all customers.",        "status": "normal" }, "2023-02-10T17:15:00Z": {        "message": "Hub sites were not available for customers.",        "status": "degraded" },
         */
        "history"?: any;
    }
    interface HubStatusService {
        /**
          * {        "title": "Hub Sites",        "Status": "normal"    }
         */
        "service"?: any;
    }
    interface HubStatusServiceList {
        /**
          * "services": [    {        "title": "Hub Sites",        "Status": "normal"    },    {        "title": "Search API",        "Status": "normal"    },    {        "title": "Content Indexer",        "Status": "normal"    },    {        "title": "Downloads",        "Status": "normal"    },    {        "title": "Discussions",        "Status": "normal"    } ],
         */
        "services"?: any;
    }
    interface HubStatusSummary {
        /**
          * {      "status": "normal",      "title": "All Good. Systems are running as expected!",      "message": "There are no known outages for ArcGIS Hub. Notice Something?"  }
         */
        "status"?: any;
    }
    interface HubStatusView {
    }
    interface IntrinsicElements {
        "hub-changelog": HubChangelog;
        "hub-status-history": HubStatusHistory;
        "hub-status-service": HubStatusService;
        "hub-status-service-list": HubStatusServiceList;
        "hub-status-summary": HubStatusSummary;
        "hub-status-view": HubStatusView;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hub-changelog": LocalJSX.HubChangelog & JSXBase.HTMLAttributes<HTMLHubChangelogElement>;
            "hub-status-history": LocalJSX.HubStatusHistory & JSXBase.HTMLAttributes<HTMLHubStatusHistoryElement>;
            "hub-status-service": LocalJSX.HubStatusService & JSXBase.HTMLAttributes<HTMLHubStatusServiceElement>;
            "hub-status-service-list": LocalJSX.HubStatusServiceList & JSXBase.HTMLAttributes<HTMLHubStatusServiceListElement>;
            "hub-status-summary": LocalJSX.HubStatusSummary & JSXBase.HTMLAttributes<HTMLHubStatusSummaryElement>;
            "hub-status-view": LocalJSX.HubStatusView & JSXBase.HTMLAttributes<HTMLHubStatusViewElement>;
        }
    }
}
