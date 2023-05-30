import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'hub-changelog',
  styleUrl: 'hub-changelog.css',
  shadow: true,
})
export class HubChangelog {

  /**
   * Array of status change events
   * 
   * {
    "versions": {
        "2023-05-20T17:33:00Z": {
            "added": [
                {"text": "[Beta] Search results can now be filtered by source"},
                {"text": "[Beta] Search results may now be filtered by license"},
                {"text": "Updated translation strings"}
            ],
            "changed": [
                {"text": "Updated translation strings"}
            ],
            "fixed": [
                {"text": "Fixed popover positioning under side panel tab controls"},
                {"text": "Fixed an issue where selecting a Discussions graphic on the map while one is already selected did not unselect the previous graphic"},
                {"text": "Updated CSS selector to apply underlined links on 404 pages"},
                {"text": "[Beta] Fixed issue where the experimental map filter stopped working on the new search route (/explore) after the route had switched to using the OGC API"},
                {"text": "Removed pluralized strings for language support due to problematic translation support in browsers"},
                {"text": "Fixed issue where selecting a dataset from the global nav search while on a dataset page would break the map"}
            ]
        }
    }
}
   */
  @Prop() changelogUrl: any = './data/changelog.json';

  @State() versions: any = null;

  /**
   * Number of days history to show
   */
  @Prop() days: number = 30;

  @State() events: any = null;

  async componentWillLoad() {
    const response = await fetch(this.changelogUrl)
    this.versions = await response.json();
    console.debug("Versions", this.versions);
  }
  render() {
    var dateFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' })

    return (
      <Host>
        <slot></slot>
        <div id="status-history-list">
          {this.versions?.versions.map((version) => {
            var priorDate = new Date(version.timestamp);
            var day = dateFormat.format(priorDate);
    
            return this.renderVersion(day, version)
          })}
        </div>
      </Host>
    );
  }

  renderVersion(day, version) {

    return <div class="status-day">
      <div class="date">{day}</div>
      <br/>
      <div class="status-event">
        <div class="status-event-title">Added</div>
        <ul>
          {version.added.map((item) => { return (<li>{item.text}</li>)})}
        </ul>
        <div class="status-event-title">Changed</div>
        <ul>
          {version.changed.map((item) => { return (<li>{item.text}</li>)})}
        </ul>
        <div class="status-event-title">Fixed</div>
        <ul>
          {version.fixed.map((item) => { return (<li>{item.text}</li>)})}
        </ul>
      </div>
    </div>
  }

}
