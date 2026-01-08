import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import GlassMorphButton from '../components/buttons/GlassMorphButton';
import SocialMediaIcons from '../components/SocialMediaIcons';
import BluredPageHeader from '../components/sectionfuctions/BluredPageHeader';
import ProjectGridSquare from '../components/sectionfuctions/ProjectGridSquare';
import Footer from '../components/mainfunctions/Footer';
import './SiteDesign.css';

export default function SiteDesign() {
  // Navigation demo state
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRefs = React.useRef([]);
  const indicatorRef = React.useRef(null);
  const navItems = ['Home', 'Projects', 'About', 'Contact'];

  // Update indicator position when active item changes
  React.useEffect(() => {
    if (!indicatorRef.current || navRefs.current.length === 0) return;
    
    const activeLink = navRefs.current[activeNavItem];
    const navBg = activeLink?.parentElement;
    
    if (activeLink && navBg && indicatorRef.current) {
      const navRect = navBg.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      const minWidth = 60;
      const width = Math.max(linkRect.width, minWidth);
      indicatorRef.current.style.left = linkRect.left - navRect.left + 'px';
      indicatorRef.current.style.width = width + 'px';
    }
  }, [activeNavItem]);

  // Color palette - comprehensive list
  const colors = [
    { name: 'Black', value: '#000', description: 'Primary background' },
    { name: 'White', value: '#fff', description: 'Primary text' },
    { name: 'Dark Gray', value: '#262626', description: 'Card backgrounds' },
    { name: 'Medium Gray', value: '#222', description: 'Button backgrounds, dropdowns' },
    { name: 'Light Gray', value: '#e0e0e0', description: 'Secondary text' },
    { name: 'Muted Gray', value: '#bdbdbd', description: 'Tertiary text' },
    { name: 'Glass Gray', value: 'rgba(137, 137, 137, 0.48)', description: 'Glass morphism background' },
    { name: 'Nav Background', value: 'rgba(255,255,255,0.25)', description: 'Navigation glass effect' },
    { name: 'Nav Overlay', value: 'rgba(0,0,0,0.2)', description: 'Navigation overlay' },
    { name: 'Accent Orange', value: '#ffb347', description: 'Accent color, headings' },
    { name: 'Accent Orange Light', value: '#ffcc80', description: 'Accent gradient end' },
    { name: 'Accent Cyan', value: '#00cfff', description: 'Contact page accent' },
    { name: 'White 70%', value: 'rgba(255, 255, 255, 0.7)', description: 'Muted text, headings' },
    { name: 'White 20%', value: 'rgba(255, 255, 255, 0.2)', description: 'Borders, dividers' },
    { name: 'White 10%', value: 'rgba(255, 255, 255, 0.1)', description: 'Subtle borders' },
    { name: 'Black 85%', value: 'rgba(0,0,0,0.85)', description: 'Mobile dropdown background' },
    { name: 'Black 50%', value: 'rgba(0,0,0,0.5)', description: 'Overlays, hover states' },
    { name: 'Black 30%', value: 'rgba(0,0,0,0.3)', description: 'Card backgrounds, overlays' },
    { name: 'Black 20%', value: 'rgba(0,0,0,0.2)', description: 'Navigation overlay' },
    { name: 'Black 18%', value: 'rgba(0,0,0,0.18)', description: 'Shadows, overlays' },
    { name: 'Black 10%', value: 'rgba(0,0,0,0.10)', description: 'Nav shadows' },
  ];

  // Font weights
  const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <>
      <Helmet>
        <title>Site Design System | Jack Wingate</title>
        <meta name="description" content="Design system showcase - colors, fonts, icons, buttons, and components" />
      </Helmet>
      <div className="main-container">
        <div className="site-design-page">
          {/* Header */}
          <BluredPageHeader
            title="Site Design System"
            imageSrc="/home-main-imgs/IMG_6734.JPG"
            animateOn={true}
          />

          <div className="site-design-content">
            {/* Colors Section */}
            <section className="design-section">
              <h2 className="section-title">Colors</h2>
              <div className="colors-grid">
                {colors.map((color) => (
                  <div key={color.name} className="color-card">
                    <div
                      className="color-swatch"
                      style={{ backgroundColor: color.value }}
                    />
                    <div className="color-info">
                      <h3>{color.name}</h3>
                      <code>{color.value}</code>
                      <p>{color.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Typography Section */}
            <section className="design-section">
              <h2 className="section-title">Typography</h2>
              <div className="typography-info">
                <h3>Font Family: Geologica</h3>
                <p>Available weights: 100-900</p>
              </div>
              <div className="font-weights-grid">
                {fontWeights.map((weight) => (
                  <div key={weight} className="font-weight-sample">
                    <div className="font-weight-label">Weight {weight}</div>
                    <div
                      className="font-weight-text"
                      style={{ fontWeight: weight }}
                    >
                      The quick brown fox jumps over the lazy dog
                    </div>
                  </div>
                ))}
              </div>
              <div className="font-sizes">
                <h3>Font Sizes (Desktop)</h3>
                <div className="font-size-samples">
                  <div style={{ fontSize: '93px', fontWeight: 700 }}>93px (Hero Title - Desktop)</div>
                  <div style={{ fontSize: '87.7px', fontWeight: 500 }}>87.7px (Page Header - Desktop)</div>
                  <div style={{ fontSize: '48px', fontWeight: 700 }}>48px (Section Title)</div>
                  <div style={{ fontSize: '35pt', fontWeight: 700 }}>35pt (Showreel Title)</div>
                  <div style={{ fontSize: '32px', fontWeight: 600 }}>32px (Subsection Title)</div>
                  <div style={{ fontSize: '28px', fontWeight: 500 }}>28px (Card Title)</div>
                  <div style={{ fontSize: '28pt', fontWeight: 500 }}>28pt (Project Grid Title)</div>
                  <div style={{ fontSize: '20px', fontWeight: 600 }}>20px (Card Name, Footer Name)</div>
                  <div style={{ fontSize: '18px', fontWeight: 400 }}>18px (Body Large)</div>
                  <div style={{ fontSize: '16px', fontWeight: 400 }}>16px (Body, Navigation)</div>
                  <div style={{ fontSize: '15pt', fontWeight: 400 }}>15pt (Showreel Description)</div>
                  <div style={{ fontSize: '14px', fontWeight: 400 }}>14px (Small Text, Footer Copyright)</div>
                  <div style={{ fontSize: '13pt', fontWeight: 400 }}>13pt (Showreel Availability)</div>
                  <div style={{ fontSize: '12px', fontWeight: 400 }}>12px (Labels, Captions)</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 400 }}>1.25rem (Button Text - 20px)</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 400 }}>1.15rem (Body Large - 18.4px)</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>1.1rem (Mobile Nav Title - 17.6px)</div>
                  <div style={{ fontSize: '1rem', fontWeight: 400 }}>1rem (Base - 16px)</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>0.75rem (Mobile Nav Link - 12px)</div>
                </div>
              </div>

              <div className="font-sizes-responsive" style={{ marginTop: '50px' }}>
                <h3>Responsive Font Sizes (clamp)</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '24px' }}>
                  These font sizes scale fluidly between breakpoints using CSS clamp()
                </p>
                <div className="font-size-samples-responsive">
                  <div className="responsive-size-sample">
                    <div className="responsive-size-label">Hero Title</div>
                    <div className="responsive-size-code">clamp(32px, 8vw, 93px)</div>
                    <div className="responsive-size-display" style={{ fontSize: 'clamp(32px, 8vw, 93px)', fontWeight: 700 }}>
                      Desktop: 93px → Tablet: ~56px → Mobile: 32px
                    </div>
                    <div className="responsive-size-breakpoints">
                      <span>Desktop (&gt;1023px): 93px</span>
                      <span>Tablet (600-1023px): ~56px</span>
                      <span>Mobile (&lt;600px): 32px</span>
                    </div>
                  </div>
                  
                  <div className="responsive-size-sample">
                    <div className="responsive-size-label">Hero Title (Tablet)</div>
                    <div className="responsive-size-code">clamp(28px, 7vw, 56px)</div>
                    <div className="responsive-size-display" style={{ fontSize: 'clamp(28px, 7vw, 56px)', fontWeight: 700 }}>
                      Scales between 28px and 56px
                    </div>
                    <div className="responsive-size-breakpoints">
                      <span>Tablet viewport: 28px - 56px</span>
                    </div>
                  </div>

                  <div className="responsive-size-sample">
                    <div className="responsive-size-label">Hero Title (Mobile)</div>
                    <div className="responsive-size-code">clamp(32px, 10vw, 32px)</div>
                    <div className="responsive-size-display" style={{ fontSize: 'clamp(32px, 10vw, 32px)', fontWeight: 700 }}>
                      Fixed at 32px on mobile
                    </div>
                    <div className="responsive-size-breakpoints">
                      <span>Mobile viewport: 32px (fixed)</span>
                    </div>
                  </div>

                  <div className="responsive-size-sample">
                    <div className="responsive-size-label">Page Header Title</div>
                    <div className="responsive-size-code">clamp(16px, 4vw, 32px)</div>
                    <div className="responsive-size-display" style={{ fontSize: 'clamp(16px, 4vw, 32px)', fontWeight: 500 }}>
                      Scales between 16px and 32px
                    </div>
                    <div className="responsive-size-breakpoints">
                      <span>Desktop: 32px</span>
                      <span>Mobile: 16px</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="font-sizes-by-mode" style={{ marginTop: '50px' }}>
                <h3>Font Sizes by Viewport Mode</h3>
                <div className="mode-comparison-grid">
                  <div className="mode-column">
                    <h4>Desktop (&gt;1023px)</h4>
                    <div className="mode-sizes">
                      <div>Hero: 93px</div>
                      <div>Page Header: 87.7px</div>
                      <div>Section Title: 48px</div>
                      <div>Subsection: 32px</div>
                      <div>Card Title: 28px</div>
                      <div>Body Large: 20px</div>
                      <div>Body: 16px</div>
                      <div>Small: 14px</div>
                    </div>
                  </div>
                  
                  <div className="mode-column">
                    <h4>Tablet (600px - 1023px)</h4>
                    <div className="mode-sizes">
                      <div>Hero: ~56px (clamp)</div>
                      <div>Page Header: ~56px (clamp)</div>
                      <div>Section Title: 48px</div>
                      <div>Subsection: 32px</div>
                      <div>Card Title: 28px</div>
                      <div>Body Large: 18px</div>
                      <div>Body: 16px</div>
                      <div>Small: 14px</div>
                    </div>
                  </div>
                  
                  <div className="mode-column">
                    <h4>Mobile (&lt;600px)</h4>
                    <div className="mode-sizes">
                      <div>Hero: 32px (clamp)</div>
                      <div>Page Header: 35pt</div>
                      <div>Section Title: 36px</div>
                      <div>Subsection: 28pt</div>
                      <div>Card Title: 18pt</div>
                      <div>Body Large: 1.15rem</div>
                      <div>Body: 1rem</div>
                      <div>Nav Link: 0.75rem</div>
                      <div>Small: 13pt</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Icons Section */}
            <section className="design-section">
              <h2 className="section-title">Icons</h2>
              <div className="icons-showcase">
                <h3>Social Media Icons</h3>
                <div className="icons-container">
                  <SocialMediaIcons />
                </div>
                <div className="icon-list">
                  <p>Available icons:</p>
                  <ul>
                    <li>YouTube</li>
                    <li>X (Twitter)</li>
                    <li>Instagram</li>
                    <li>Bluesky</li>
                    <li>LinkedIn</li>
                    <li>Threads</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Buttons Section */}
            <section className="design-section">
              <h2 className="section-title">Buttons</h2>
              <div className="buttons-showcase">
                <h3>Glass Morphism Button</h3>
                <div className="button-examples">
                  <GlassMorphButton onClick={() => alert('Button clicked!')}>
                    Default Button
                  </GlassMorphButton>
                  <GlassMorphButton onClick={() => alert('Button clicked!')}>
                    View Project
                  </GlassMorphButton>
                  <GlassMorphButton onClick={() => alert('Button clicked!')}>
                    Learn More
                  </GlassMorphButton>
                </div>
                <div className="button-states">
                  <h4>Button States:</h4>
                  <ul>
                    <li>Default: Glass morphism with blur effect</li>
                    <li>Hover: Enhanced shadow</li>
                    <li>Active/Clicked: Scale down (0.98) with deeper shadow</li>
                    <li>Focus: White outline for accessibility</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Components Section */}
            <section className="design-section">
              <h2 className="section-title">Components</h2>
              
              <div className="component-showcase">
                <h3>Project Grid Square</h3>
                <div className="component-preview">
                  <div style={{ maxWidth: '300px', width: '100%' }}>
                    <ProjectGridSquare
                      title="Example Project"
                      subText="This is a sample project card"
                      buttonText="View Project"
                      background="#262626"
                      onButtonClick={() => alert('Project clicked!')}
                    />
                  </div>
                </div>
              </div>

              <div className="component-showcase">
                <h3>Blured Page Header</h3>
                <p>Used at the top of this page. Features:</p>
                <ul>
                  <li>Dynamic height adjustment on scroll</li>
                  <li>Font size scaling</li>
                  <li>Glass morphism blur effect</li>
                  <li>Gradient overlay</li>
                </ul>
                <div className="page-header-examples">
                  <div className="page-header-example">
                    <h4>Example 1: Default Header</h4>
                    <div className="page-header-preview">
                      <BluredPageHeader
                        title="Example Page Title"
                        imageSrc="/home-main-imgs/IMG_6734.JPG"
                        animateOn={false}
                      />
                    </div>
                  </div>
                  <div className="page-header-example">
                    <h4>Example 2: Long Title</h4>
                    <div className="page-header-preview">
                      <BluredPageHeader
                        title="This is a Longer Page Title Example"
                        imageSrc="/home-main-imgs/IMG_6734.JPG"
                        animateOn={false}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="component-showcase">
                <h3>Site Header (Navigation)</h3>
                <p>The main site navigation header with glass morphism effect. Click the navigation items to see the indicator animate!</p>
                
                <div className="header-examples">
                  <div className="header-example">
                    <h4>Desktop Mode</h4>
                    <div className="header-preview desktop-header-preview">
                      <div className="demo-nav-wrapper">
                        <nav className="demo-nav-bg">
                          <div className="demo-nav-indicator" ref={indicatorRef}></div>
                          {navItems.map((item, idx) => (
                            <button
                              key={item}
                              className={`demo-nav-link ${activeNavItem === idx ? 'demo-nav-link-active' : ''}`}
                              ref={(el) => (navRefs.current[idx] = el)}
                              onClick={() => setActiveNavItem(idx)}
                            >
                              {item}
                            </button>
                          ))}
                        </nav>
                      </div>
                    </div>
                    <p className="header-description">Desktop navigation with animated indicator pill - Click items to see the indicator move!</p>
                  </div>

                  <div className="header-example">
                    <h4>Mobile Mode</h4>
                    <div className="header-preview mobile-header-preview">
                      <div className="demo-mobile-nav-wrapper">
                        <nav className="demo-mobile-nav-bg">
                          <div className="demo-mobile-pill">
                            <span className="demo-mobile-pill-title">{navItems[activeNavItem]}</span>
                            <button 
                              className="demo-mobile-hamburger" 
                              aria-label="Menu"
                              aria-expanded={mobileMenuOpen}
                              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                              <span className="demo-hamburger-bar"></span>
                              <span className="demo-hamburger-bar"></span>
                              <span className="demo-hamburger-bar"></span>
                            </button>
                          </div>
                          {mobileMenuOpen && (
                            <div className="demo-mobile-dropdown">
                              {navItems.map((item, idx) => (
                                <button
                                  key={item}
                                  className={`demo-mobile-dropdown-link ${activeNavItem === idx ? 'demo-mobile-dropdown-link-active' : ''}`}
                                  onClick={() => {
                                    setActiveNavItem(idx);
                                    setMobileMenuOpen(false);
                                  }}
                                >
                                  {item}
                                </button>
                              ))}
                            </div>
                          )}
                        </nav>
                      </div>
                    </div>
                    <p className="header-description">Mobile navigation with hamburger menu - Click the hamburger to toggle the menu!</p>
                  </div>
                </div>
              </div>

              <div className="component-showcase">
                <h3>Social Media Icons Component</h3>
                <p>Displays all social media links with hover effects</p>
              </div>
            </section>

            {/* Design Tokens Section */}
            <section className="design-section">
              <h2 className="section-title">Design Tokens</h2>
              <div className="tokens-grid">
                <div className="token-category">
                  <h3>Spacing</h3>
                  <ul>
                    <li>Small: 6px</li>
                    <li>Medium: 16px</li>
                    <li>Large: 24px</li>
                    <li>XLarge: 32px</li>
                    <li>XXLarge: 72px</li>
                  </ul>
                </div>
                <div className="token-category">
                  <h3>Border Radius</h3>
                  <ul>
                    <li>Small: 15px (Cards)</li>
                    <li>Medium: 30px (Navigation)</li>
                    <li>Large: 75px (Buttons)</li>
                  </ul>
                </div>
                <div className="token-category">
                  <h3>Shadows</h3>
                  <ul>
                    <li>Card: 0px 8px 32px rgba(0,0,0,0.18)</li>
                    <li>Button: 0px 4px 16px rgba(0,0,0,0.18)</li>
                    <li>Nav: 0px 4px 24px rgba(0,0,0,0.10)</li>
                  </ul>
                </div>
                <div className="token-category">
                  <h3>Blur Effects</h3>
                  <ul>
                    <li>Navigation: blur(18px)</li>
                    <li>Button: blur(7.95px)</li>
                    <li>Header: blur(7.95px)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
