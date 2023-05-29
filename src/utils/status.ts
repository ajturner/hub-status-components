export async function getStatusData(statusUrl: string) {
    const response = await fetch(statusUrl);
    const status = await response.json();
    status.overview.title = ""
    switch (status.overview.status) {
        case "normal": {
            status.overview.title = "All Good. Systems are running as expected!"
            status.overview.icon = "success";
            status.overview.message ||= "There are no known outages for ArcGIS Hub. Notice Something?"
            break;
        }
        case "degraded": {
          status.overview.title = "Uh oh. You might be experiencing issues."
          status.overview.icon = "warning";
          status.overview.message ||= "ArcGIS Hub services are having issues, we are working to fix them."
          break;
        }
        case "down": {
          status.overview.title = "Oh no. ArcGIS Hub is not available.";
          status.overview.icon = "dange";
          status.overview.message ||= "We currently have a service problem, sorry for the inconvenience as we develop a solution."
          break;
        }
        case "maintenance": {
          status.overview.title = "Heads up, we are performing some maintenance.";
          status.overview.icon = "info";
          status.overview.message ||= "You may experience a temporary outage while maintenance is performed."
          break;
        }
      }    
    return status;

    //   .then((response) => {
    //     response.json().then((status) => {
    //       return(status);
    //     }).catch((error) => {
    //       console.error("Error parsing status.json", error);
    //     })
    //   })
    //   .catch((error) => {
    //     console.error("Error getting status.json", error);

    //     return ({
    //         "status": "normal",
    //         "title": "All Good. Systems are running as expected!",
    //         "message": "There are no known outages for ArcGIS Hub. Notice Something?"
    //     })
        
    //   });
}

export function buildHistory(history) {
    var events = Object.create(null);
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var dateFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' })
    var timeFormat = new Intl.DateTimeFormat('en', {
        hour: 'numeric',
        minute: 'numeric',
        timeZone: tz,
        timeZoneName: 'short'  })

    // Aggregate events by day
    for(let eventStamp in history) {
        var eventDate = new Date(eventStamp)
        var day = dateFormat.format(eventDate)
        if (!events[day]) {
        events[day] = [];
        }
        events[day].push({timestamp: timeFormat.format(eventDate), details: history[eventStamp]});
    }

    return events;
}

export function getStatusDisplay(status: string, message: string = null) {
    switch(status) {
        case "normal": {
            return {
                icon: "check-circle-f",
                message: message || "All Good. Systems are running as expected!"
            };
        }
        case "degraded": {
            return {
                icon: "exclamation-mark-triangle-f",
                message: message || "ArcGIS Hub services are having issues, we are working to fix them."
            };
        }
        case "down": {
            return {
                icon: "x-circle-f",
                message: message || "We currently have a service problem, sorry for the inconvenience as we develop a solution."
            };
        }
        case "maintenance": {
            return {
                icon: "exclamation-mark-triangle-f",
                message: message || "Service under maintenance, degraded functionality"
            };
        }
        default: {
            return {
                icon: "question-mark-circle-f",
                message: message || "Unknown status"
            }
        }

    }
}