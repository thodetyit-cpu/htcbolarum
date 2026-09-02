# HTC Bolarum — 180th Year Celebration

Vercel-ready static prototype for the CSI Holy Trinity Church, Bolarum 180th Year Celebration competition portal.

## Pages
- `/` public celebration portal
- `/event.html?event=cricket` competition details
- `/admin.html` organizer event editor

## Current data
Initial competition list is based on the supplied event sheet: Quiz, Singing, Volleyball, Throwball, Cricket, Football, Musical Chairs.

## Production note
The admin prototype uses browser localStorage so the UI can be demonstrated immediately. For a shared production admin, replace localStorage with a database/authentication layer (for example Supabase/Neon) before public launch.
