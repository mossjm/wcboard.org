# PDF Report Delivery Instructions

After generating the accessibility compliance PDF:

1. Save locally to `/tmp/wcboard-accessibility-report.pdf`
2. Upload to Google Drive: `gog drive upload /tmp/wcboard-accessibility-report.pdf --account john@elmlakecranberry.com`
3. Make publicly accessible with link (use Drive API):
   ```bash
   curl -s -X POST "https://www.googleapis.com/drive/v3/files/$FILE_ID/permissions" \
     -H "Authorization: Bearer $ACCESS_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"role": "reader", "type": "anyone"}'
   ```
4. Get the shareable link and send it to John
