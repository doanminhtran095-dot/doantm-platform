/**
 * DOANTM Platform - 3D Interactive Drone Engine
 * High-performance, lightweight Three.js Quadcopter implementation
 * Features: Procedural mesh generation, harmonic physics floating, cursor tracking,
 * acrobatic stunts, radar scanning, and dynamic telemetry HUD.
 */

class Drone3DEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.droneGroup = null;
    this.propellers = [];
    this.navLeds = [];
    this.radarMesh = null;
    this.particles = null;
    this.starsGroup = null;
    this.brightStars = null;
    this.planetsGroup = null;
    this.rotatingPlanets = [];
    this.planetMoons = [];

    // Interaction states
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.isHovered = false;
    this.flightMode = 'hover'; // 'hover', 'turbo', 'radar'
    this.clock = new THREE.Clock();

    // Acrobatic animation states
    this.isDoingStunt = false;
    this.stuntProgress = 0;
    this.stuntType = 'barrel-roll';

    // Telemetry stats
    this.altitude = 12.4;
    this.speed = 0.0;
    this.battery = 96;

    this.init();
  }

  init() {
    // 1. Scene setup
    this.scene = new THREE.Scene();

    // 2. Camera setup
    const aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
    this.camera.position.set(0, 1.2, 5.2);
    this.camera.lookAt(0, 0, 0);

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.container.appendChild(this.renderer.domElement);

    // 4. Lighting (Mystical cosmic blue and emerald aurora setup - ZERO red)
    this.setupLighting();

    // 5. Build procedural high-tech drone
    this.buildDroneModel();

    // 6. Celestial planets, moons & twinkling starfield
    this.createCosmicEnvironment();

    // 7. Event listeners
    this.setupEventListeners();

    // 8. Animation loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  setupLighting() {
    // 1. Crisp ambient light with soft celestial illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    this.scene.add(ambientLight);

    // 2. Main star key light for crisp specular highlights on beveled edges
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.4);
    keyLight.position.set(6, 10, 6);
    this.scene.add(keyLight);

    // 3. Cosmic deep blue / cyan fill light
    const fillLight = new THREE.DirectionalLight(0x38bdf8, 2.4);
    fillLight.position.set(-6, 5, 4);
    this.scene.add(fillLight);

    // 4. Mystical Aurora Emerald rim light (giving exquisite green edge glow)
    const rimLight = new THREE.DirectionalLight(0x10b981, 2.6);
    rimLight.position.set(-5, -2, -5);
    this.scene.add(rimLight);

    // 5. Under-belly deep cyan / cosmic glow
    const underGlow = new THREE.PointLight(0x06b6d4, 3.2, 12);
    underGlow.position.set(0, -1.2, 0);
    this.scene.add(underGlow);

    // 6. Emerald planetary bounce light
    const planetGlow = new THREE.PointLight(0x059669, 2.0, 10);
    planetGlow.position.set(-3, -2, -2);
    this.scene.add(planetGlow);
  }

  buildDroneModel() {
    this.droneGroup = new THREE.Group();

    // High-Tech Materials: Bright Platinum White + Polished CNC Titanium Alloy + Dark Carbon
    const brightFuselageMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc, // Crisp Platinum Pearl White (Luminous & Reflective)
      metalness: 0.7,
      roughness: 0.18,
    });

    const silverAlloyMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0, // Polished Aerospace Aluminum / Titanium
      metalness: 0.92,
      roughness: 0.12,
    });

    const carbonTrimMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b, // Dark Carbon Slate Accent
      metalness: 0.8,
      roughness: 0.35,
    });

    const darkGrilleMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Matte Black Intake Louvers
      metalness: 0.3,
      roughness: 0.6,
    });

    const emeraldAccent = new THREE.MeshStandardMaterial({
      color: 0x10b981, // Neon Aurora Emerald Green
      emissive: 0x059669,
      emissiveIntensity: 0.6,
      metalness: 0.3,
      roughness: 0.2,
    });
    const redAccent = emeraldAccent; // Fallback alias to guarantee no ReferenceError

    const cyanAccent = new THREE.MeshStandardMaterial({
      color: 0x06b6d4, // Neon Cyber Cyan Lightbar
      emissive: 0x0891b2,
      emissiveIntensity: 0.6,
      metalness: 0.3,
      roughness: 0.2,
    });

    const opticalLensMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.8,
      transmission: 0.85,
      opacity: 1,
      transparent: true,
      roughness: 0.08,
      metalness: 0.2,
    });

    const thermalLensMat = new THREE.MeshPhysicalMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 0.7,
      transmission: 0.8,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      metalness: 0.3,
    });

    // 1. Aerodynamic Stealth Hull with Beveled/Rounded Corners (NOT a circle/sphere!)
    // Symmetrical stealth aerospace contour with beveled chamfer corners
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.65);       // Front nose tip
    shape.lineTo(0.18, 0.58);    // Nose chamfer right
    shape.lineTo(0.35, 0.26);    // Front angled shoulder
    shape.lineTo(0.44, -0.06);   // Mid-deck aerodynamic flank
    shape.lineTo(0.36, -0.32);   // Cyber waist cut-in
    shape.lineTo(0.38, -0.58);   // Rear battery flank
    shape.lineTo(0.18, -0.66);   // Rear exhaust corner
    shape.lineTo(0, -0.62);      // Rear center notch
    shape.lineTo(-0.18, -0.66);  // Rear exhaust left
    shape.lineTo(-0.38, -0.58);
    shape.lineTo(-0.36, -0.32);
    shape.lineTo(-0.44, -0.06);
    shape.lineTo(-0.35, 0.26);
    shape.lineTo(-0.18, 0.58);
    shape.closePath();

    const extrudeSettings = {
      depth: 0.14,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.035,
      bevelThickness: 0.035
    };
    const chassisGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    chassisGeo.center();
    chassisGeo.rotateX(Math.PI / 2);
    const chassisMesh = new THREE.Mesh(chassisGeo, brightFuselageMat);
    chassisMesh.castShadow = true;
    this.droneGroup.add(chassisMesh);

    // 2. Top Deck Beveled Armor Canopy (Sleek Angular Cockpit)
    const canopyShape = new THREE.Shape();
    canopyShape.moveTo(0, 0.46);
    canopyShape.lineTo(0.13, 0.38);
    canopyShape.lineTo(0.22, 0.16);
    canopyShape.lineTo(0.26, -0.10);
    canopyShape.lineTo(0.20, -0.36);
    canopyShape.lineTo(0, -0.42);
    canopyShape.lineTo(-0.20, -0.36);
    canopyShape.lineTo(-0.26, -0.10);
    canopyShape.lineTo(-0.22, 0.16);
    canopyShape.lineTo(-0.13, 0.38);
    canopyShape.closePath();

    const canopyGeo = new THREE.ExtrudeGeometry(canopyShape, {
      depth: 0.08,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.025,
      bevelThickness: 0.025
    });
    canopyGeo.center();
    canopyGeo.rotateX(Math.PI / 2);
    const canopyMesh = new THREE.Mesh(canopyGeo, silverAlloyMat);
    canopyMesh.position.set(0, 0.10, -0.04);
    this.droneGroup.add(canopyMesh);

    // 3. Air Intake Cooling Gills on Forward Nose Deck
    for (let i = 0; i < 3; i++) {
      const ventGeo = new THREE.BoxGeometry(0.16 - i * 0.03, 0.015, 0.035);
      const ventMesh = new THREE.Mesh(ventGeo, darkGrilleMat);
      ventMesh.position.set(0, 0.135, -0.20 - i * 0.055);
      this.droneGroup.add(ventMesh);
    }

    // 4. Center Spine Neon Cyan Cyber Light Strip
    const spineGeo = new THREE.BoxGeometry(0.022, 0.018, 0.82);
    const spineMesh = new THREE.Mesh(spineGeo, cyanAccent);
    spineMesh.position.set(0, 0.145, -0.02);
    this.droneGroup.add(spineMesh);

    // 5. LiDAR Laser Sensor Turret on Top Deck
    const lidarGeo = new THREE.CylinderGeometry(0.08, 0.09, 0.05, 8);
    const lidarMesh = new THREE.Mesh(lidarGeo, carbonTrimMat);
    lidarMesh.position.set(0, 0.16, 0.02);
    const lidarLensGeo = new THREE.CylinderGeometry(0.055, 0.055, 0.02, 16);
    const lidarLens = new THREE.Mesh(lidarLensGeo, new THREE.MeshBasicMaterial({ color: 0x8b5cf6 }));
    lidarLens.position.set(0, 0.03, 0);
    lidarMesh.add(lidarLens);
    this.droneGroup.add(lidarMesh);

    // 6. Dual High-Precision RTK GNSS Satellite Domes
    for (let side of [-0.15, 0.15]) {
      const rtkGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.05, 16);
      const rtkMesh = new THREE.Mesh(rtkGeo, silverAlloyMat);
      rtkMesh.position.set(side, 0.15, 0.28);

      const rtkLedGeo = new THREE.SphereGeometry(0.015, 8, 8);
      const rtkLed = new THREE.Mesh(rtkLedGeo, new THREE.MeshBasicMaterial({ color: 0x22c55e }));
      rtkLed.position.set(0, 0.03, 0);
      rtkMesh.add(rtkLed);

      this.droneGroup.add(rtkMesh);
    }

    // 7. Dual Front Binocular Obstacle Avoidance Stereo Vision Cameras
    for (let side of [-0.08, 0.08]) {
      const eyeGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.03, 12);
      eyeGeo.rotateX(Math.PI / 2);
      const eyeMesh = new THREE.Mesh(eyeGeo, carbonTrimMat);
      eyeMesh.position.set(side, 0.02, -0.66);

      const eyeLensGeo = new THREE.SphereGeometry(0.015, 8, 8);
      const eyeLens = new THREE.Mesh(eyeLensGeo, cyanAccent);
      eyeLens.position.set(0, 0, -0.015);
      eyeMesh.add(eyeLens);

      this.droneGroup.add(eyeMesh);
    }

    // 8. Rear Modular Battery Pack with 4-Bar Green LED Indicator
    const battGeo = new THREE.BoxGeometry(0.32, 0.12, 0.28);
    const battMesh = new THREE.Mesh(battGeo, carbonTrimMat);
    battMesh.position.set(0, 0.01, 0.44);

    for (let b = 0; b < 4; b++) {
      const barGeo = new THREE.BoxGeometry(0.045, 0.01, 0.015);
      const barMesh = new THREE.Mesh(barGeo, new THREE.MeshBasicMaterial({ color: 0x22c55e }));
      barMesh.position.set(-0.09 + b * 0.06, 0.062, 0.1);
      battMesh.add(barMesh);
    }
    this.droneGroup.add(battMesh);

    // 9. Dual Telemetry High-Gain Antennas on Rear Deck
    for (let side of [-0.2, 0.2]) {
      const antGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.28, 12);
      const antMesh = new THREE.Mesh(antGeo, carbonTrimMat);
      antMesh.position.set(side, 0.15, 0.52);
      antMesh.rotation.x = -Math.PI / 5;

      const antTipGeo = new THREE.SphereGeometry(0.018, 8, 8);
      const antTip = new THREE.Mesh(antTipGeo, cyanAccent);
      antTip.position.set(0, 0.14, 0);
      antMesh.add(antTip);

      this.droneGroup.add(antMesh);
    }

    // 10. Four Diagonal High-Tech Structural Truss Arms with Neon Lightbars
    const armDistance = 1.18;
    const angles = [
      Math.PI / 4,       // Front-Right
      (3 * Math.PI) / 4, // Front-Left
      (5 * Math.PI) / 4, // Rear-Left
      (7 * Math.PI) / 4  // Rear-Right
    ];

    angles.forEach((angle, idx) => {
      const armGroup = new THREE.Group();
      const posX = Math.cos(angle) * armDistance;
      const posZ = Math.sin(angle) * armDistance;
      const isFront = posZ < 0;

      // Primary carbon tubular spar
      const armLength = armDistance;
      const armTubeGeo = new THREE.CylinderGeometry(0.038, 0.038, armLength, 16);
      const armTube = new THREE.Mesh(armTubeGeo, silverAlloyMat);
      armTube.position.set(posX / 2, 0, posZ / 2);
      armTube.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(posX, 0, posZ).normalize());
      armGroup.add(armTube);

      // Embedded Neon LED Light Strip on Top of Arm
      const stripGeo = new THREE.BoxGeometry(0.016, 0.012, armLength * 0.75);
      const stripMat = isFront ? cyanAccent : emeraldAccent;
      const stripMesh = new THREE.Mesh(stripGeo, stripMat);
      stripMesh.position.set(posX / 2, 0.025, posZ / 2);
      stripMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(posX, 0, posZ).normalize());
      armGroup.add(stripMesh);

      // Fuselage Knuckle Joint Collar
      const collarGeo = new THREE.CylinderGeometry(0.055, 0.055, 0.12, 12);
      const collarMesh = new THREE.Mesh(collarGeo, carbonTrimMat);
      collarMesh.position.set(posX * 0.28, 0, posZ * 0.28);
      armGroup.add(collarMesh);

      // Motor Nacelle: CNC Fluted Bell Pod
      const motorGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.16, 24);
      const motorMesh = new THREE.Mesh(motorGeo, silverAlloyMat);
      motorMesh.position.set(posX, 0.06, posZ);
      armGroup.add(motorMesh);

      // Motor Bottom Carbon Heat Sink Cap
      const motorCapGeo = new THREE.CylinderGeometry(0.13, 0.11, 0.05, 24);
      const motorCap = new THREE.Mesh(motorCapGeo, carbonTrimMat);
      motorCap.position.set(posX, -0.02, posZ);
      armGroup.add(motorCap);

      // Motor Halo Ring Accent
      const ringGeo = new THREE.TorusGeometry(0.132, 0.012, 12, 32);
      const ringMesh = new THREE.Mesh(ringGeo, isFront ? cyanAccent : emeraldAccent);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.set(posX, 0.11, posZ);
      armGroup.add(ringMesh);

      // Navigation LEDs
      const ledColor = isFront ? 0x06b6d4 : 0x10b981;
      const ledMat = new THREE.MeshBasicMaterial({ color: ledColor });
      const ledGeo = new THREE.SphereGeometry(0.038, 12, 12);
      const ledMesh = new THREE.Mesh(ledGeo, ledMat);
      ledMesh.position.set(posX, -0.05, posZ);
      armGroup.add(ledMesh);

      this.navLeds.push({ mesh: ledMesh, color: ledColor, isFront });

      // Propeller Assembly
      const propGroup = new THREE.Group();
      propGroup.position.set(posX, 0.17, posZ);

      // Propeller Anodized CNC Hub Nut
      const hubGeo = new THREE.CylinderGeometry(0.042, 0.042, 0.05, 16);
      const hubMesh = new THREE.Mesh(hubGeo, cyanAccent);
      propGroup.add(hubMesh);

      // Aerodynamic Carbon Blades with White & Cyan Warning Stripes
      const bladeGeo = new THREE.BoxGeometry(0.74, 0.012, 0.065);
      const bladeMat = new THREE.MeshStandardMaterial({
        color: 0x334155, // Stealth dark carbon composite
        roughness: 0.25,
        metalness: 0.7
      });
      const bladeMesh = new THREE.Mesh(bladeGeo, bladeMat);
      propGroup.add(bladeMesh);

      // Hazard Warning Striping on Propeller Tips (Cyan & Crisp White)
      for (let tipSide of [-0.34, 0.34]) {
        // High-tech Cyan tip
        const tipCyanGeo = new THREE.BoxGeometry(0.04, 0.014, 0.068);
        const tipCyan = new THREE.Mesh(tipCyanGeo, cyanAccent);
        tipCyan.position.set(tipSide, 0, 0);
        propGroup.add(tipCyan);

        // White stripe adjacent
        const tipWhiteGeo = new THREE.BoxGeometry(0.025, 0.014, 0.068);
        const tipWhite = new THREE.Mesh(tipWhiteGeo, brightFuselageMat);
        tipWhite.position.set(tipSide > 0 ? tipSide - 0.035 : tipSide + 0.035, 0, 0);
        propGroup.add(tipWhite);
      }

      // Translucent High-RPM Rotor Blur Disc
      const blurDiscGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.005, 24);
      const blurDiscMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.24
      });
      const blurDisc = new THREE.Mesh(blurDiscGeo, blurDiscMat);
      propGroup.add(blurDisc);

      armGroup.add(propGroup);
      this.propellers.push({
        group: propGroup,
        direction: idx % 2 === 0 ? 1 : -1
      });

      this.droneGroup.add(armGroup);
    });

    // 11. Heavy-Duty 3-Axis Gimbal Dual-Sensor Turret (4K Optical Zoom + FLIR Thermal)
    const gimbalBaseGeo = new THREE.CylinderGeometry(0.085, 0.085, 0.08, 16);
    const gimbalBase = new THREE.Mesh(gimbalBaseGeo, silverAlloyMat);
    gimbalBase.position.set(0, -0.13, -0.18);
    this.droneGroup.add(gimbalBase);

    const gimbalArmGeo = new THREE.TorusGeometry(0.12, 0.02, 10, 20, Math.PI);
    const gimbalArm = new THREE.Mesh(gimbalArmGeo, silverAlloyMat);
    gimbalArm.rotation.x = Math.PI / 2;
    gimbalArm.position.set(0, -0.17, -0.18);
    this.droneGroup.add(gimbalArm);

    // Multi-Sensor Camera Turret Housing (Beveled Box)
    const turretGeo = new THREE.BoxGeometry(0.18, 0.12, 0.16);
    const turretMesh = new THREE.Mesh(turretGeo, carbonTrimMat);
    turretMesh.position.set(0, -0.22, -0.18);

    // Primary 4K Optical Telephoto Lens (Left)
    const lensOptGeo = new THREE.CylinderGeometry(0.038, 0.038, 0.04, 16);
    lensOptGeo.rotateX(Math.PI / 2);
    const lensOpt = new THREE.Mesh(lensOptGeo, opticalLensMat);
    lensOpt.position.set(-0.045, 0, -0.085);
    turretMesh.add(lensOpt);

    // Secondary FLIR Thermal Infrared Lens (Right)
    const lensThermGeo = new THREE.CylinderGeometry(0.028, 0.028, 0.04, 16);
    lensThermGeo.rotateX(Math.PI / 2);
    const lensTherm = new THREE.Mesh(lensThermGeo, thermalLensMat);
    lensTherm.position.set(0.045, 0, -0.085);
    turretMesh.add(lensTherm);

    // Laser Rangefinder Pin (Center Top)
    const lrfGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.02, 8);
    lrfGeo.rotateX(Math.PI / 2);
    const lrf = new THREE.Mesh(lrfGeo, cyanAccent);
    lrf.position.set(0, 0.035, -0.085);
    turretMesh.add(lrf);

    this.droneGroup.add(turretMesh);

    // 12. Angular Carbon-Fiber Landing Skids
    for (let side of [-0.36, 0.36]) {
      const skidGeo = new THREE.BoxGeometry(0.03, 0.02, 0.68);
      const skidMesh = new THREE.Mesh(skidGeo, carbonTrimMat);
      skidMesh.position.set(side, -0.28, 0);

      // Angled Carbon Support Struts
      for (let strutZ of [-0.18, 0.18]) {
        const strutGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.22, 12);
        const strutMesh = new THREE.Mesh(strutGeo, silverAlloyMat);
        strutMesh.position.set(side * 0.72, -0.18, strutZ);
        strutMesh.rotation.z = side > 0 ? -0.32 : 0.32;
        this.droneGroup.add(strutMesh);
      }

      this.droneGroup.add(skidMesh);
    }

    // 13. Radar Scanning Holographic Cone
    const radarGeo = new THREE.ConeGeometry(1.6, 2.2, 16, 1, true);
    const radarMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.0
    });
    this.radarMesh = new THREE.Mesh(radarGeo, radarMat);
    this.radarMesh.position.set(0, -1.3, -0.18);
    this.droneGroup.add(this.radarMesh);

    // Default angle & position
    this.droneGroup.rotation.y = -Math.PI / 5;
    this.droneGroup.rotation.x = 0.15;
    this.scene.add(this.droneGroup);
  }

  createCosmicEnvironment() {
    // Container groups for celestial bodies and stars to enable 3D parallax
    this.starsGroup = new THREE.Group();
    this.planetsGroup = new THREE.Group();
    this.rotatingPlanets = [];
    this.planetMoons = [];

    // ==========================================
    // A. TWINKLING STARFIELD (Deep Space Stars - White, Cyan & Emerald)
    // ==========================================
    const starCount = 550;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 36;
      starPositions[i + 1] = (Math.random() - 0.5) * 26;
      starPositions[i + 2] = -Math.random() * 18 - 2.5; // Spread deep behind the drone

      // Color distribution: Cosmic white, cyan/azure, mystical emerald/mint (ZERO red)
      const p = Math.random();
      if (p < 0.45) {
        // Bright star-white
        starColors[i] = 0.95; starColors[i + 1] = 0.98; starColors[i + 2] = 1.0;
      } else if (p < 0.75) {
        // Cosmic cyan / azure star
        starColors[i] = 0.18; starColors[i + 1] = 0.78; starColors[i + 2] = 0.98;
      } else {
        // Mystical emerald / mint star
        starColors[i] = 0.18; starColors[i + 1] = 0.92; starColors[i + 2] = 0.62;
      }
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const starPoints = new THREE.Points(starGeo, starMat);
    this.starsGroup.add(starPoints);

    // Bright Twinkling Diamond Stars
    const brightCount = 45;
    const brightGeo = new THREE.BufferGeometry();
    const brightPositions = new Float32Array(brightCount * 3);
    const brightColors = new Float32Array(brightCount * 3);

    for (let i = 0; i < brightCount * 3; i += 3) {
      brightPositions[i] = (Math.random() - 0.5) * 32;
      brightPositions[i + 1] = (Math.random() - 0.5) * 24;
      brightPositions[i + 2] = -Math.random() * 14 - 3.0;

      const p = Math.random();
      if (p > 0.5) {
        brightColors[i] = 0.35; brightColors[i + 1] = 0.88; brightColors[i + 2] = 1.0; // Cyan diamond
      } else {
        brightColors[i] = 0.25; brightColors[i + 1] = 0.98; brightColors[i + 2] = 0.7; // Emerald diamond
      }
    }

    brightGeo.setAttribute('position', new THREE.BufferAttribute(brightPositions, 3));
    brightGeo.setAttribute('color', new THREE.BufferAttribute(brightColors, 3));

    const brightMat = new THREE.PointsMaterial({
      size: 0.13,
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });

    this.brightStars = new THREE.Points(brightGeo, brightMat);
    this.starsGroup.add(this.brightStars);

    // Soft Cosmic Aurora Dust (Green & Blue ethereal space dust)
    const dustCount = 140;
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 22;
      dustPositions[i + 1] = (Math.random() - 0.5) * 16;
      dustPositions[i + 2] = (Math.random() - 0.5) * 8 - 2.0;

      // Smooth green to blue gradient
      if (Math.random() > 0.5) {
        dustColors[i] = 0.05; dustColors[i + 1] = 0.75; dustColors[i + 2] = 0.95; // Cyan
      } else {
        dustColors[i] = 0.08; dustColors[i + 1] = 0.85; dustColors[i + 2] = 0.55; // Emerald
      }
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

    const dustMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });

    this.particles = new THREE.Points(dustGeo, dustMat);
    this.starsGroup.add(this.particles);

    this.scene.add(this.starsGroup);

    // ==========================================
    // B. CELESTIAL PLANETS (Surrounding the Drone)
    // ==========================================

    // 1. PLANET 1: Cosmic Azure Gas Giant with Planetary Ring
    const planet1Group = new THREE.Group();
    planet1Group.position.set(4.3, 2.2, -5.2);

    const gasGiantTex = this.createProceduralCanvasTexture('gas-giant');
    const planet1Geo = new THREE.SphereGeometry(0.78, 36, 36);
    const planet1Mat = new THREE.MeshStandardMaterial({
      map: gasGiantTex,
      roughness: 0.38,
      metalness: 0.15,
    });
    const planet1Mesh = new THREE.Mesh(planet1Geo, planet1Mat);
    planet1Group.add(planet1Mesh);

    // Atmosphere Cyan Glow Shell
    const atmo1Geo = new THREE.SphereGeometry(0.82, 32, 32);
    const atmo1Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    planet1Group.add(new THREE.Mesh(atmo1Geo, atmo1Mat));

    // Planetary Ring with radial UVs
    const ringGeo = new THREE.RingGeometry(1.08, 1.82, 64);
    const pos = ringGeo.attributes.position;
    const uvs = ringGeo.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const dist = Math.sqrt(x * x + y * y);
      const u = (dist - 1.08) / (1.82 - 1.08);
      uvs.setXY(i, u, 0.5);
    }
    uvs.needsUpdate = true;

    const ringTex = this.createRingTexture();
    const ringMat = new THREE.MeshBasicMaterial({
      map: ringTex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI * 0.42;
    ringMesh.rotation.y = -Math.PI * 0.12;
    planet1Group.add(ringMesh);

    // Tiny moon orbiting Planet 1
    const moonGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const moonMat = new THREE.MeshStandardMaterial({
      color: 0x93c5fd,
      roughness: 0.5,
      metalness: 0.2
    });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    planet1Group.add(moonMesh);
    this.planetMoons.push({ mesh: moonMesh, radius: 2.1, speed: 0.7, tilt: 0.3 });

    this.planetsGroup.add(planet1Group);
    this.rotatingPlanets.push({ group: planet1Mesh, speed: 0.08 });

    // 2. PLANET 2: Mystical Emerald Biosphere / Aurora World
    const planet2Group = new THREE.Group();
    planet2Group.position.set(-3.9, -1.9, -4.2);

    const emeraldTex = this.createProceduralCanvasTexture('emerald-world');
    const planet2Geo = new THREE.SphereGeometry(0.58, 36, 36);
    const planet2Mat = new THREE.MeshStandardMaterial({
      map: emeraldTex,
      roughness: 0.32,
      metalness: 0.2,
    });
    const planet2Mesh = new THREE.Mesh(planet2Geo, planet2Mat);
    planet2Group.add(planet2Mesh);

    // Emerald Atmosphere Aura Shell
    const atmo2Geo = new THREE.SphereGeometry(0.62, 32, 32);
    const atmo2Mat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    planet2Group.add(new THREE.Mesh(atmo2Geo, atmo2Mat));

    this.planetsGroup.add(planet2Group);
    this.rotatingPlanets.push({ group: planet2Mesh, speed: 0.12 });

    // 3. PLANET 3: Distant Lunar Ice Crescent Moon
    const planet3Group = new THREE.Group();
    planet3Group.position.set(-2.5, 3.2, -7.2);

    const iceTex = this.createProceduralCanvasTexture('ice-moon');
    const planet3Geo = new THREE.SphereGeometry(0.35, 28, 28);
    const planet3Mat = new THREE.MeshStandardMaterial({
      map: iceTex,
      roughness: 0.6,
      metalness: 0.15,
    });
    const planet3Mesh = new THREE.Mesh(planet3Geo, planet3Mat);
    planet3Group.add(planet3Mesh);

    // Soft Cyan Halo
    const atmo3Geo = new THREE.SphereGeometry(0.38, 24, 24);
    const atmo3Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    planet3Group.add(new THREE.Mesh(atmo3Geo, atmo3Mat));

    this.planetsGroup.add(planet3Group);
    this.rotatingPlanets.push({ group: planet3Mesh, speed: 0.05 });

    this.scene.add(this.planetsGroup);
  }

  createProceduralCanvasTexture(type) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    if (type === 'gas-giant') {
      // Cosmic Blue / Cyan Banded Atmosphere
      const grad = ctx.createLinearGradient(0, 0, 0, 256);
      grad.addColorStop(0.0, '#020617'); // Dark cosmic space
      grad.addColorStop(0.12, '#0c4a6e'); // Deep sky blue
      grad.addColorStop(0.25, '#0284c7'); // Ocean cyan
      grad.addColorStop(0.38, '#0369a1'); // Azure band
      grad.addColorStop(0.48, '#38bdf8'); // Luminous storm band
      grad.addColorStop(0.58, '#0284c7');
      grad.addColorStop(0.70, '#0f172a'); // Dark band
      grad.addColorStop(0.85, '#0284c7');
      grad.addColorStop(1.0, '#020617');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 256);

      // Add atmospheric swirl stripes & storm turbulence
      for (let i = 0; i < 35; i++) {
        const y = Math.random() * 256;
        const h = Math.random() * 8 + 2;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(56, 189, 248, 0.25)' : 'rgba(6, 182, 212, 0.18)';
        ctx.fillRect(0, y, 512, h);
      }
      // Great Dark/Cyan Spot
      ctx.beginPath();
      ctx.ellipse(320, 110, 36, 18, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(14, 165, 233, 0.45)';
      ctx.fill();
    } else if (type === 'emerald-world') {
      // Deep Oceanic Base (Dark Teal/Abyss)
      ctx.fillStyle = '#022c22';
      ctx.fillRect(0, 0, 512, 256);

      // Continents & Biosphere Landmasses in Emerald & Jade
      ctx.fillStyle = '#059669';
      for (let i = 0; i < 18; i++) {
        ctx.beginPath();
        const cx = Math.random() * 512;
        const cy = Math.random() * 256;
        const r = Math.random() * 45 + 15;
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#10b981';
      for (let i = 0; i < 22; i++) {
        ctx.beginPath();
        const cx = Math.random() * 512;
        const cy = Math.random() * 256;
        const r = Math.random() * 28 + 8;
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Aurora Cloud Wisps (Cyan & Mint)
      ctx.fillStyle = 'rgba(110, 231, 183, 0.25)';
      for (let i = 0; i < 12; i++) {
        const y = Math.random() * 256;
        ctx.fillRect(0, y, 512, Math.random() * 12 + 4);
      }
    } else if (type === 'ice-moon') {
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, 512, 256);

      // Crater details in Slate & Cyan
      for (let i = 0; i < 35; i++) {
        const cx = Math.random() * 512;
        const cy = Math.random() * 256;
        const r = Math.random() * 18 + 4;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
        ctx.stroke();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }

  createRingTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 256, 0);
    grad.addColorStop(0.0, 'rgba(2, 6, 23, 0)');
    grad.addColorStop(0.15, 'rgba(6, 182, 212, 0.7)');
    grad.addColorStop(0.35, 'rgba(56, 189, 248, 0.85)');
    grad.addColorStop(0.50, 'rgba(15, 23, 42, 0.1)'); // Cassini division gap
    grad.addColorStop(0.65, 'rgba(16, 185, 129, 0.65)'); // Emerald outer ring
    grad.addColorStop(0.85, 'rgba(56, 189, 248, 0.4)');
    grad.addColorStop(1.0, 'rgba(2, 6, 23, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 16);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  setupEventListeners() {
    // Mouse movement inside Hero
    const heroSection = document.getElementById('hero-section') || window;
    heroSection.addEventListener('mousemove', (e) => {
      const rect = this.container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      this.mouse.targetX = Math.max(-1.5, Math.min(1.5, mouseX));
      this.mouse.targetY = Math.max(-1.5, Math.min(1.5, mouseY));
    });

    this.container.addEventListener('mouseenter', () => {
      this.isHovered = true;
    });

    this.container.addEventListener('mouseleave', () => {
      this.isHovered = false;
      this.mouse.targetX = 0;
      this.mouse.targetY = 0;
    });

    // Click on canvas triggers acrobatic roll
    this.container.addEventListener('click', () => {
      this.triggerStunt('barrel-roll');
    });

    // Window resize
    window.addEventListener('resize', () => {
      if (!this.container || !this.renderer || !this.camera) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });
  }

  triggerStunt(type = 'barrel-roll') {
    if (this.isDoingStunt) return;
    this.isDoingStunt = true;
    this.stuntType = type;
    this.stuntProgress = 0;

    // HUD feedback
    this.updateHUD('STUNT: ' + type.toUpperCase(), 'active');
  }

  setFlightMode(mode) {
    this.flightMode = mode;
    if (mode === 'radar') {
      this.radarMesh.material.opacity = 0.35;
    } else {
      this.radarMesh.material.opacity = 0.0;
    }
    this.updateHUD();
  }

  updateHUD(customStatus, statusType) {
    const altEl = document.getElementById('hud-altitude');
    const spdEl = document.getElementById('hud-speed');
    const batEl = document.getElementById('hud-battery');
    const modeEl = document.getElementById('hud-mode');

    if (altEl) altEl.textContent = this.altitude.toFixed(1) + ' m';
    if (spdEl) spdEl.textContent = (this.flightMode === 'turbo' ? 45.2 : this.speed).toFixed(1) + ' km/h';
    if (batEl) batEl.textContent = this.battery + '%';
    if (modeEl) {
      if (customStatus) {
        modeEl.textContent = customStatus;
      } else {
        modeEl.textContent = this.flightMode.toUpperCase();
      }
    }
  }

  animate() {
    requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();
    const time = this.clock.getElapsedTime();

    // 1. Spin propellers
    const propSpeed = this.flightMode === 'turbo' ? 42.0 : 22.0;
    this.propellers.forEach(prop => {
      prop.group.rotation.y += prop.direction * propSpeed * delta;
    });

    // 2. Nav LEDs pulsation (Front Cyan, Rear Emerald Green - ZERO red)
    this.navLeds.forEach((led, idx) => {
      if (led.isFront) {
        led.mesh.material.color.setHex(0x06b6d4);
      } else {
        const pulse = Math.sin(time * 6 + idx) > 0 ? 0x10b981 : 0x064e3b;
        led.mesh.material.color.setHex(pulse);
      }
    });

    // 3. Cosmic Space Animations: Stars Twinkling, Planets Rotating & 3D Depth Parallax
    if (this.rotatingPlanets) {
      this.rotatingPlanets.forEach(p => {
        p.group.rotation.y += delta * p.speed;
      });
    }

    if (this.planetMoons) {
      this.planetMoons.forEach(m => {
        const angle = time * m.speed;
        m.mesh.position.set(
          Math.cos(angle) * m.radius,
          Math.sin(angle * m.tilt) * 0.4,
          Math.sin(angle) * m.radius
        );
      });
    }

    if (this.brightStars) {
      this.brightStars.material.opacity = 0.7 + Math.sin(time * 3.5) * 0.25;
    }

    if (this.particles) {
      this.particles.rotation.y = time * 0.02;
    }

    // Dynamic Multi-layer 3D Parallax with mouse movement
    if (this.planetsGroup) {
      this.planetsGroup.position.x = -this.mouse.x * 0.45;
      this.planetsGroup.position.y = -this.mouse.y * 0.32;
    }
    if (this.starsGroup) {
      this.starsGroup.position.x = -this.mouse.x * 0.15;
      this.starsGroup.position.y = -this.mouse.y * 0.10;
    }

    // 4. Smooth Damped Mouse Following
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // 5. Physics Hover & Stunt Animation
    if (this.droneGroup) {
      // Harmonic floating math
      const hoverY = Math.sin(time * 1.8) * 0.12;
      const hoverX = Math.cos(time * 1.2) * 0.06;
      const naturalPitch = Math.sin(time * 1.5) * 0.04;
      const naturalRoll = Math.cos(time * 1.3) * 0.04;

      if (this.isDoingStunt) {
        this.stuntProgress += delta * 2.2;
        if (this.stuntType === 'barrel-roll') {
          this.droneGroup.rotation.z = Math.sin(this.stuntProgress * Math.PI) * Math.PI * 2;
          this.droneGroup.position.y = hoverY + Math.sin(this.stuntProgress * Math.PI) * 0.35;
        } else if (this.stuntType === 'turbo-flip') {
          this.droneGroup.rotation.x = Math.sin(this.stuntProgress * Math.PI) * Math.PI * 2;
          this.droneGroup.position.y = hoverY + Math.sin(this.stuntProgress * Math.PI) * 0.45;
        }

        if (this.stuntProgress >= 1.0) {
          this.isDoingStunt = false;
          this.stuntProgress = 0;
          this.droneGroup.rotation.z = 0;
          this.droneGroup.rotation.x = 0.15;
          this.updateHUD();
        }
      } else {
        // Normal interactive flight posture
        this.droneGroup.position.y = hoverY + (this.flightMode === 'turbo' ? 0.3 : 0);
        this.droneGroup.position.x = hoverX + this.mouse.x * 0.4;

        // Banking angles following cursor
        const targetRotY = -Math.PI / 5 + this.mouse.x * 0.55;
        const targetRotX = 0.15 - this.mouse.y * 0.35 + naturalPitch + (this.flightMode === 'turbo' ? 0.25 : 0);
        const targetRotZ = -this.mouse.x * 0.35 + naturalRoll;

        this.droneGroup.rotation.y += (targetRotY - this.droneGroup.rotation.y) * 0.06;
        this.droneGroup.rotation.x += (targetRotX - this.droneGroup.rotation.x) * 0.06;
        this.droneGroup.rotation.z += (targetRotZ - this.droneGroup.rotation.z) * 0.06;
      }

      // Radar rotation if active
      if (this.flightMode === 'radar' && this.radarMesh) {
        this.radarMesh.rotation.y += delta * 1.8;
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// Global hook
window.Drone3DEngine = Drone3DEngine;
