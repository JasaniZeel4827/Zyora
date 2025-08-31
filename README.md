# 3D Interactive Book

A high-performance 3D book implementation built with React Three Fiber and Three.js, featuring realistic page turning animations and interactive controls.

## Features

- **Realistic 3D Book** with dynamic lighting and shadows
- **Smooth Page Turning** with physics-based animations
- **Interactive Controls**:
  - Orbit controls for 360° viewing
  - Hover effects on interactive elements
  - Responsive design for all device sizes
- **Customizable Content**:
  - Easy page content management
  - Support for custom textures and materials
  - Configurable book dimensions and appearance

## Technologies

- **Core**:
  - [React](https://reactjs.org/)
  - [Three.js](https://threejs.org/)
  - [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
  - [@react-three/drei](https://github.com/pmndrs/drei)

- **Build & Development**:
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Jotai](https://jotai.org/) for state management
  - [Leva](https://github.com/pmndrs/leva) for debugging

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/3d-book.git
   cd 3d-book
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view in your browser.

## Project Structure

```
3d-book/
├── public/                 # Static assets
│   ├── audios/             # Sound effects (e.g., page turning sounds)
│   ├── images/             # Image assets
│   └── textures/           # 3D model textures and materials
│       ├── book-cover.jpg
│       ├── book-cover-roughness.jpg
│       ├── book-back.jpg
│       └── DSC0*.jpg       # Page textures
│
└── src/
    ├── assets/             # Static assets used in components
    ├── components/         # React components
    │   ├── Book.jsx        # Main 3D book implementation
    │   ├── Experience.jsx  # 3D scene setup and lighting
    │   └── UI.jsx          # User interface components
    ├── App.jsx             # Main application component
    └── main.jsx            # Application entry point
```

## Book Implementation Details

The book is implemented using Three.js SkinnedMesh for smooth page animations. Key implementation details:

- **Page Geometry**:
  - Width: 1.28 units
  - Height: 1.71 units (4:3 aspect ratio)
  - Depth: 0.003 units

- **Animation Parameters**:
  - Page turning speed controlled by easing functions
  - Customizable curve strength for natural page bending
  - Physics-based page folding simulation

- **Materials**:
  - Realistic paper texture mapping
  - Dynamic shadow casting
  - Custom shaders for page edges and surface details

## Customization

### Changing Book Content
1. Add/update page textures in `public/textures/`
2. Modify the `pages` array in `UI.jsx` to update content

### Adjusting 3D Parameters
Edit the following files for specific customizations:
- `Book.jsx`: Page dimensions, animation parameters
- `Experience.jsx`: Lighting, camera position, environment
- `UI.jsx`: Content and navigation controls

## Building for Production

```bash
# Create production build
npm run build
# or
yarn build

# Preview production build
npm run preview
# or
yarn preview
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- 3D rendering powered by [Three.js](https://threejs.org/)
- Special thanks to the React Three Fiber community
