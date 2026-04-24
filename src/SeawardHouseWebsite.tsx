export default function SeawardHouseWebsite() {

    const images = [
      "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992601/Screenshot_2026-04-23_at_4.14.51_PM_etcakn.png",
      "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992599/Screenshot_2026-04-23_at_4.15.28_PM_g9hftg.png",
      "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992601/Screenshot_2026-04-23_at_4.15.00_PM_vvnape.png",
      "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992585/Screenshot_2026-04-23_at_4.16.26_PM_e7ideo.png",
      "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992583/Screenshot_2026-04-23_at_4.18.04_PM_pot0x2.png",
    ];
  
    return (
      <div style={{ padding: "40px", background: "#111", minHeight: "100vh" }}>
        
        <h1 style={{
          color: "white",
          fontSize: "48px",
          marginBottom: "40px"
        }}>
          Seaward House
        </h1>
  
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px"
        }}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover"
              }}
            />
          ))}
        </div>
  
      </div>
    );
  }
  