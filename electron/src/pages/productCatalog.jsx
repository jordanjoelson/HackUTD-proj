import React, { useState } from 'react';
import '../index.css'; // Ensure the correct path to styles.css

const ProductCatalog = () => {
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  const toggleDescription = (descId) => {
    setVisibleDescriptions((prevState) => ({
      ...prevState,
      [descId]: !prevState[descId],
    }));
  };

  return (
    <div>
      <div className="title-box">
        <h1 className="text-3xl">Product Catalog</h1>
      </div>

      <div className="section">
        <div className="section-title">Internet Packages</div>

        <div className="package">
          <div className="package-icon">⚡</div>
          <h2>Fiber 500 - 500Mbps Connection</h2>
          <p>Includes one standard Wi-Fi router</p>
          <p>$45/month</p>
          <a href="javascript:void(0);" className="more-info" onClick={() => toggleDescription('desc500')}>More Info</a>
          <div id="desc500" className={`description ${visibleDescriptions['desc500'] ? 'visible' : ''}`}>
            <p>This plan offers 500 Mbps speeds, perfect for small households or light streaming and browsing needs. It includes a Wi-Fi router to cover a typical home.</p>
          </div>
        </div>

        <div className="package">
          <div className="package-icon">🌐</div>
          <h2>Fiber 1 Gig - 1Gbps Connection</h2>
          <p>Includes one standard Wi-Fi router</p>
          <p>$65/month</p>
          <a href="javascript:void(0);" className="more-info" onClick={() => toggleDescription('desc1gig')}>More Info</a>
          <div id="desc1gig" className={`description ${visibleDescriptions['desc1gig'] ? 'visible' : ''}`}>
            <p>This plan provides 1 Gbps speeds, ideal for medium households with multiple devices and heavy streaming. The plan includes a Wi-Fi router for seamless coverage.</p>
          </div>
        </div>

        <div className="package">
          <div className="package-icon">🚀</div>
          <h2>Fiber 2 Gig - 2Gbps Connection</h2>
          <p>Includes one upgraded Wi-Fi router and one extender</p>
          <p>$99/month</p>
          <a href="javascript:void(0);" className="more-info" onClick={() => toggleDescription('desc2gig')}>More Info</a>
          <div id="desc2gig" className={`description ${visibleDescriptions['desc2gig'] ? 'visible' : ''}`}>
            <p>With 2 Gbps speeds, this plan supports large households, remote work, and 4K streaming. It comes with an upgraded router and an extender to enhance coverage.</p>
          </div>
        </div>

        <div className="package">
          <div className="package-icon">📶</div>
          <h2>Fiber 5 Gig - 5Gbps Connection</h2>
          <p>Includes one premium Wi-Fi router</p>
          <p>$129/month</p>
          <a href="javascript:void(0);" className="more-info" onClick={() => toggleDescription('desc5gig')}>More Info</a>
          <div id="desc5gig" className={`description ${visibleDescriptions['desc5gig'] ? 'visible' : ''}`}>
            <p>Enjoy blazing-fast 5 Gbps speeds with this plan, perfect for ultra-fast gaming, 4K video streaming, and large data transfers. A premium Wi-Fi router is included.</p>
          </div>
        </div>

        <div className="package">
          <div className="package-icon">🏠</div>
          <h2>Fiber 7 Gig - 7Gbps Connection</h2>
          <p>Includes one premium router and an extender at no charge</p>
          <p>$299/month</p>
          <a href="javascript:void(0);" className="more-info" onClick={() => toggleDescription('desc7gig')}>More Info</a>
          <div id="desc7gig" className={`description ${visibleDescriptions['desc7gig'] ? 'visible' : ''}`}>
            <p>This plan offers 7 Gbps speeds for the most demanding households. Includes a premium router and extender for optimal coverage across large homes.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Add-Ons</div>

        <div className="addon">
          <div className="addon-icon">🏠</div>
          <h2>Whole-Home Wi-Fi</h2>
          <p>Get the latest generation router with up to two additional extenders provided to Fiber 2 Gig speeds and below, and 1 extender for 7 and 5 Gig to get a consistently strong Wi-Fi signal throughout the home.</p>
          <p>$10/month</p>
          <a href="javascript:void(0);" className="more-info" onClick={() => toggleDescription('descWholeHomeWiFi')}>More Info</a>
          <div id="descWholeHomeWiFi" className={`description ${visibleDescriptions['descWholeHomeWiFi'] ? 'visible' : ''}`}>
            <p>Ensure strong Wi-Fi throughout your home with our Whole-Home Wi-Fi add-on. Includes extenders for optimal coverage, especially for larger homes or multi-story buildings.</p>
          </div>
        </div>

        <div className="addon">
          <div className="addon-icon">🔋</div>
          <h2>Unbreakable Wi-Fi</h2>
          <p>Backup internet during outages with 4G LTE data. Automatic switchover during network outages and back to fiber when restored.</p>
          <p>$25/month</p>
          <a href="javascript:void(0);" className="more-info" onClick={() => toggleDescription('descUnbreakableWiFi')}>More Info</a>
          <div id="descUnbreakableWiFi" className={`description ${visibleDescriptions['descUnbreakableWiFi'] ? 'visible' : ''}`}>
            <p>Unbreakable Wi-Fi ensures internet continuity with 4G LTE backup. When fiber internet is down, the system switches to LTE data for uninterrupted service.</p>
          </div>
        </div>

        <div className="addon">
          <div className="addon-icon">🔋</div>
          <h2>Battery Backup for Unbreakable Wi-Fi</h2>
          <p>Optional Battery Backup Unit (power pack) offers up to 4 hours of power during outages.</p>
          <p>$130 one-time</p>
          <a href="javascript:void(0);" className="more-info" onClick={() => toggleDescription('descBatteryBackup')}>More Info</a>
          <div id="descBatteryBackup" className={`description ${visibleDescriptions['descBatteryBackup'] ? 'visible' : ''}`}>
            <p>This add-on provides a battery backup for your internet connection. It offers up to 4 hours of power during outages to ensure that your Wi-Fi stays online.</p>
          </div>
        </div>

        <div className="addon">
          <div className="addon-icon">🔒</div>
          <h2>Wi-Fi Security</h2>
          <p>Advanced security managed via the app. Protects devices connected on the home network from malicious sites, scams, phishing.</p>
          <p>$5/month</p>
          <a href="javascript:void(0);" className="more-info" onClick={() => toggleDescription('descWiFiSecurity')}>More Info</a>
          <div id="descWiFiSecurity" className={`description ${visibleDescriptions['descWiFiSecurity'] ? 'visible' : ''}`}>
            <p>Protect your home network with Wi-Fi Security. Blocks malicious sites, phishing attacks, and scams to keep your devices safe online.</p>
          </div>
        </div>

        <div className="addon">
          <div className="addon-icon">🛡️</div>
          <h2>Wi-Fi Security Plus</h2>
          <p>Includes VPN, password manager, and multi-device security. Protects devices both at home and while away.</p>
          <p>$10/month</p>
          <a href="javascript:void(0);" className="more-info" onClick={() => toggleDescription('descWiFiSecurityPlus')}>More Info</a>
          <div id="descWiFiSecurityPlus" className={`description ${visibleDescriptions['descWiFiSecurityPlus'] ? 'visible' : ''}`}>
            <p>Wi-Fi Security Plus offers comprehensive protection with a VPN, password manager, and multi-device security to keep your data safe both at home and on the go.</p>
          </div>
        </div>

        <div className="addon">
          <div className="addon-icon">🛡️</div>
          <h2>Additional Extender</h2>
          <p>Additional extender for above products.</p>
          <p>$5/month per extender</p>
          <a href="javascript:void(0);" className="more-info" onClick={() => toggleDescription('descAdditionalExtender')}>More Info</a>
          <div id="descAdditionalExtender" className={`description ${visibleDescriptions['descAdditionalExtender'] ? 'visible' : ''}`}>
            <p>Get more coverage with an additional Wi-Fi extender for your home network. Ideal for larger homes or homes with dead zones.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;