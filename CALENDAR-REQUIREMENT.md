# Calendar / Upcoming Meetings Section

John wants a section for upcoming meetings/events. NOT a full calendar page — just a clean, usable list of upcoming meetings that people can find easily.

## Requirements:
- Link in the navigation or prominent placement (possibly under About or Grower Resources)
- Show upcoming board meetings, public hearings, industry events
- Clean list format with date, time, location, description
- Could be a dedicated /meetings or /events page, or a section within an existing page
- Data can be placeholder for now — [PLACEHOLDER] meeting entries
- Should be easy for the WCB to update (consider a simple data file or content collection in Astro)

## Suggested implementation:
- Astro content collection for events (markdown or JSON)
- Simple /meetings page with upcoming events listed chronologically
- Past events could be hidden or shown in a separate "Past Meetings" section
- Add "Upcoming Meetings" link to main nav or as a quick link on the homepage
