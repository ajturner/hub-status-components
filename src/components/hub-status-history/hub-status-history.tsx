import { Component, Host, Prop, State, h } from '@stencil/core';
import { buildHistory, getStatusDisplay } from '../../utils/status';

@Component({
  tag: 'hub-status-history',
  styleUrl: 'hub-status-history.css',
  shadow: true,
})
export class HubStatusHistory {

  /**
   * Array of status change events
   * 
   * "history": {
	"2023-02-10T17:33:00Z": {
            "message": "Hub sites are operating as expected for all customers.",
            "status": "normal"
	},
	"2023-02-10T17:15:00Z": {
            "message": "Hub sites were not available for customers.",
            "status": "degraded"
	},
   */
  @Prop() history: any = null;

  /**
   * Number of days history to show
   */
  @Prop() days: number = 30;

  @State() events: any = null;

  componentWillLoad() {
    this.events = buildHistory(this.history);
  }
  render() {
    var today = new Date().getDate();
    var dateFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' })

    return (
      <Host>
        <slot></slot>
        <div id="status-history-list">
          
          {[...Array(30).keys()].map((dayCount) => {
            var priorDate = new Date().setDate(today - dayCount);
            var day = dateFormat.format(priorDate);
    
            return this.renderDay(day, this.events[day]);
          })}
        </div>
      </Host>
    );
  }

  renderDay(day, events) {
    var summary;
    if(!!events) {
      summary = events.map((event) => {
        return <div class="status-event">
          {getStatusDisplay(event.details.status, event.details.message).message}
          <br/><em>at {event.timestamp}</em>
        </div>;
      })
    } else {
      summary = [<div class="status-event status-event-none">No incidents reported.</div>];
    }    
    return <div class="status-day">
      <div class="date">{day}</div>
      <br/>
      {summary}
    </div>
  }

}
