export default function SeawardHouseWebsite() {
    const images = [
      "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992601/Screenshot_2026-04-23_at_4.14.51_PM_etcakn.png",
      "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992599/Screenshot_2026-04-23_at_4.15.28_PM_g9hftg.png",
      "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992601/Screenshot_2026-04-23_at_4.15.00_PM_vvnape.png",
      "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992585/Screenshot_2026-04-23_at_4.16.26_PM_e7ideo.png",
      "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992583/Screenshot_2026-04-23_at_4.18.04_PM_pot0x2.png",
    ];
  
    return (
      <div style={{ background: "#f6f3ee", minHeight: "100vh", padding: "40px" }}>
        <h1 style={{
          fontSize: "60px",
          fontWeight: "900",
          textTransform: "uppercase",
          marginBottom: "40px"
        }}>
          Seaward House
        </h1>
  
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </div>
    );
  }
