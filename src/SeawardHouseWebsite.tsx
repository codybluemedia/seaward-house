export default function SeawardHouseWebsite() {
  const images = [
    "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992601/Screenshot_2026-04-23_at_4.14.51_PM_etcakn.png",
    "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992599/Screenshot_2026-04-23_at_4.15.28_PM_g9hftg.png",
    "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992601/Screenshot_2026-04-23_at_4.15.00_PM_vvnape.png",
    "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992585/Screenshot_2026-04-23_at_4.16.26_PM_e7ideo.png",
    "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992583/Screenshot_2026-04-23_at_4.18.04_PM_pot0x2.png"
  ];

  return (
    <div style={{ background: "#f8f8f8", minHeight: "100vh", padding: "40px" }}>
      
      {/* HERO */}
      <div style={{ 
        display: "flex", 
        gap: "40px", 
        alignItems: "center", 
        marginBottom: "80px" 
      }}>
        
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{
            fontSize: "48px",
            fontWeight: "900",
            lineHeight: "1.1",
            marginBottom: "20px"
          }}>
            CINEMATIC CONTENT FOR BRANDS THAT WANT TO LOOK EXPENSIVE.
          </h1>

          <p style={{ opacity: 0.6 }}>
            Ventura-based production creating commercial, social, and branded content.
          </p>
        </div>

        <iframe
          width="420"
          height="420"
          src="https://www.youtube.com/embed/sbefhNHI0jE"
          title="Seaward House Reel"
          style={{ borderRadius: "16px", border: "none" }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        maxWidth: "900px"
      }}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "12px"
            }}
          />
        ))}
      </div>

    </div>
  );
}
