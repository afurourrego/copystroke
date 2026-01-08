# CopyStroke

**CopyStroke** is a mini web tool designed to process 256x256 pixel images and convert them into JSON data for use in Basepaint. This app allows you to download the daily color palette, upload your drawings to get JSON data, and process both single frames and animations.

<img alt="image" src="https://github.com/user-attachments/assets/3da10188-9ca7-48b5-b48c-30ec80d52824" width="400"/>
<img alt="image" src="https://github.com/user-attachments/assets/d6751080-e728-4901-8dc0-e0809985b36e" width="400"/>

## Features:

### General Features
- **Daily Palettes**: Download the dynamically generated daily color palette as a PNG file
- **Canvas Progress**: Download the current state of today's canvas
- **Image Validation**: Automatically validates that images are 256x256 pixels
- **Pixel Statistics**: Shows total pixels and pixels without overprinting

### Single Frame Processing
- **Image Upload**: Upload 256x256 pixel images for analysis
- **Copy Stroke**: Convert images to JSON data with all pixels
- **Copy Without Overprinting**: Smart feature that downloads the current canvas and only includes pixels that are different or new, avoiding duplicate strokes
- **Reverse Stroke**: Convert JSON data from clipboard back into PNG images
- **Split Code**: Split large pixel arrays into multiple text files for easier processing (configurable section size)

### Animation Processing
- **Multi-Frame Upload**: Load multiple 256x256 frames at once
- **Smart Frame Ordering**: Automatically sorts frames numerically by filename
- **Incremental Processing**: Processes frames sequentially, only including pixels that changed from previous frames
- **Batch Export**: Exports each frame as a separate text file with only the modified pixels

## How to Use:

### Single Frame Mode
1. **Download the Daily Palette**:
   - Click "Download Today Palette .png" to get the daily color palette
2. **Download Canvas Progress**:
   - Click "Download Canvas Progress" to get the current state of the canvas
3. **Upload an Image**:
   - Click "Load Image" and select a 256x256 pixel image
   - View pixel statistics (total pixels and pixels without overprinting)
4. **Process the Image**:
   - **Copy Stroke**: Copy all pixels to clipboard as JSON
   - **Copy Without Overprinting**: Copy only new/different pixels (downloads current canvas for comparison)
5. **Split Large Images**:
   - Enter the desired pixels per section (e.g., 1000)
   - Click "Split Code" to download multiple text files with sections
6. **Reverse Stroke**:
   - Copy JSON data to clipboard
   - Click "Reverse Stroke" to generate a PNG image from the JSON

### Animation Mode
1. **Load Multiple Frames**:
   - Click "Load Multiple Frames" and select all your 256x256 animation frames
   - Frames will be automatically sorted by filename
2. **Process Animation**:
   - Click "Process Frames"
   - The tool will download the current canvas and process each frame incrementally
   - Each frame will only include pixels that changed from the previous frame
   - Downloads one text file per frame with the modified pixels
3. **View Results**:
   - Total pixels processed across all frames will be displayed


## Technologies Used:
- **HTML5**: For the structure of the application.
- **CSS3**: For custom styles and responsive design.
- **JavaScript**: For image processing, event handling, and palette generation.
- **Service Workers**: To support Progressive Web App (PWA) functionality.
