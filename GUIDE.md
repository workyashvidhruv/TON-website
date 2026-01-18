# The Offline Network - Website Management Guide

This guide will help you manage your website without any coding knowledge.

## Table of Contents
1. [Quick Start](#quick-start)
2. [Managing Episodes](#managing-episodes)
3. [Managing Guests](#managing-guests)
4. [Updating Site Settings](#updating-site-settings)
5. [Adding Images](#adding-images)
6. [Deploying Updates](#deploying-updates)

---

## Quick Start

### Running the Website Locally

1. Open a terminal in the project folder
2. Run: `npm install` (first time only)
3. Run: `npm run dev`
4. Open http://localhost:3000 in your browser

### Admin Dashboard

Go to http://localhost:3000/admin to access the admin dashboard where you can:
- Manage episodes
- Manage guests
- Extract YouTube video information
- Update site settings

---

## Managing Episodes

### Adding a New Episode

**Option 1: Using the Admin Dashboard (Recommended)**

1. Go to `/admin` and click on "Episodes" tab
2. Click "+ Add Episode"
3. Fill in the details:
   - **Episode Title**: The name of the episode
   - **YouTube URL**: Paste the full YouTube URL (we'll extract the video ID)
   - **Description**: A brief summary of the episode
   - **Duration**: Format as mm:ss (e.g., "45:30")
   - **Published Date**: When the episode was/will be published
   - **Tags**: Keywords separated by commas
   - **Guests**: Select the guests who appeared
   - **Mark as Live**: Check if this is a live episode
4. Click "Add Episode"
5. Click "Export JSON" to download the updated file
6. Replace `src/data/episodes.json` with the downloaded file

**Option 2: Editing JSON Directly**

Edit `src/data/episodes.json`:

```json
{
  "id": "ep-002",
  "number": 2,
  "title": "Your Episode Title",
  "description": "Episode description here",
  "videoId": "YOUTUBE_VIDEO_ID",
  "thumbnail": "https://i.ytimg.com/vi/YOUTUBE_VIDEO_ID/maxresdefault.jpg",
  "publishedAt": "2025-01-20T16:00:00+05:30",
  "duration": "45:30",
  "guests": ["guest-001"],
  "isLive": false,
  "tags": ["topic1", "topic2"]
}
```

### Updating the Homepage Video

To change the main video shown on the homepage:

1. Go to `/admin` → "Site Settings"
2. Update "Current Live Video ID" with the new YouTube video ID
3. Export and replace `src/data/site-config.json`

---

## Managing Guests

### Adding a New Guest

**Using the Admin Dashboard:**

1. Go to `/admin` → "Guests" tab
2. Click "+ Add Guest"
3. Fill in the details:
   - **Full Name**: Guest's name
   - **Company**: Their company/organization
   - **Job Title**: Their role
   - **Profile Image URL**: Path to their image (see Adding Images)
   - **Bio**: Brief biography
   - **Twitter URL**: Their Twitter profile
   - **LinkedIn URL**: Their LinkedIn profile
   - **Episodes**: Link to episodes they appeared in
4. Click "Add Guest"
5. Export JSON and replace `src/data/guests.json`

---

## Updating Site Settings

### What You Can Change

In `/admin` → "Site Settings":

- **Site Name**: "The Offline Network"
- **Tagline**: Main headline text
- **Description**: Secondary text
- **Schedule**: "Watch live: Mon | Wed | Fri at 4 PM"
- **Current Video ID**: The YouTube video shown on homepage
- **Social Media Links**: All your social accounts
- **Contact Email**: Your email address
- **Copyright Text**: Footer copyright notice

### Updating Social Links

1. Go to admin dashboard → "Site Settings"
2. Scroll to "Social Media Links"
3. Update any links as needed
4. Export and replace `src/data/site-config.json`

---

## Adding Images

### Guest Photos

1. Add the image file to `public/images/guests/`
2. Name it like: `guest-name.jpg`
3. Reference it in the guest data as: `/images/guests/guest-name.jpg`

### Host Photos

1. Add to `public/images/hosts/`
2. Reference as: `/images/hosts/host-name.jpg`

### Sponsor Logos

1. Add to `public/images/sponsors/`
2. Reference as: `/images/sponsors/sponsor-name.png`

### Image Guidelines

- Use JPG for photos, PNG for logos with transparency
- Recommended sizes:
  - Guest photos: 400x400 pixels
  - Host photos: 400x400 pixels
  - Sponsor logos: 300x100 pixels
- Keep file sizes under 500KB for fast loading

---

## Deploying Updates

### Method 1: GitHub + Vercel (Recommended)

If your site is connected to Vercel:

1. Make your changes (edit JSON files, add images)
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Updated episodes"
   git push
   ```
3. Vercel will automatically deploy your changes

### Method 2: Manual Build

1. Run `npm run build` to create production files
2. The `out` folder contains your static website
3. Upload to any web hosting service

---

## YouTube Video Extractor

The admin dashboard includes a YouTube extractor tool:

1. Go to `/admin` → "YouTube Extractor"
2. Paste any YouTube URL
3. Click "Extract"
4. Copy the Video ID to use when adding episodes

### Supported URL Formats

- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`
- Just the video ID (11 characters)

---

## File Structure Reference

```
src/data/
├── site-config.json    # Site settings (name, social links, etc.)
├── episodes.json       # All episodes data
└── guests.json         # All guests data

public/images/
├── hosts/             # Host profile photos
├── guests/            # Guest profile photos
└── sponsors/          # Sponsor logos
```

---

## Common Tasks Quick Reference

| Task | Where |
|------|-------|
| Add new episode | Admin → Episodes → + Add Episode |
| Add new guest | Admin → Guests → + Add Guest |
| Change homepage video | Admin → Settings → Current Live Video ID |
| Update schedule text | Admin → Settings → Schedule Text |
| Add sponsor | Edit `src/data/site-config.json` |
| Update social links | Admin → Settings → Social Media Links |

---

## Need Help?

If you need to make changes not covered here, or encounter issues:

1. Check the browser console for errors (F12 → Console tab)
2. Make sure all JSON files are valid (use a JSON validator)
3. Ensure image paths match exactly (case-sensitive)

---

## Tips for Success

1. **Always backup** before making changes to JSON files
2. **Test locally** before deploying (`npm run dev`)
3. **Use the admin dashboard** - it's designed to be easy!
4. **Keep image files small** for fast loading
5. **Update the homepage video** before each live stream
