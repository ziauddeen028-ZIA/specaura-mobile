import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [searchbar, setSearchbar] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const submit = (e) => {
    e.preventDefault();
    if (!searchbar && !selectedBrand && !selectedCategory) {
      alert("Please fill the price and choose brand & category");
      return;
    }

    let filtered = data;

    if (searchbar) {
      const maxPrice = parseInt(searchbar.replace(/[^\d]/g, ''));
      filtered = filtered.filter(item => parseInt(item.price.replace(/[^\d]/g, '')) <= maxPrice);
    }


    if (selectedBrand) {
      filtered = filtered.filter(item => item.brand.toLowerCase() === selectedBrand.toLowerCase());
    }


    if (selectedCategory) {
      filtered = filtered.filter(item => item.categories.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase()));
    }

    setFilteredData(filtered);
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (


    <form onSubmit={submit}>

      <div className="input-container">
        <label for="searchbar" />
        <input type="number" value={searchbar} id="searchbar" placeholder="Enter max price..."
          onChange={(e) => setSearchbar(e.target.value)} />

        <label htmlFor="mobile" className="brand"></label>
        <select id="mobile" name="mobile" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
          <option value="">All Brands</option>
          <option value="OnePlus">OnePlus</option>
          <option value="Samsung">Samsung</option>
          <option value="Realme">Realme</option>
          <option value="MI">Xiaomi</option>
          <option value="Oppo">OPPO</option>
          <option value="iQOO">iQOO</option>
          <option value="Vivo">Vivo</option>
          <option value="Apple">Apple</option>
          <option value="Poco">Poco</option>
          <option value="Motorola">Motorola</option>
          <option value="Moto">Moto</option>
          <option value="Google">Google</option>
          <option value="Redmi">Redmi</option>
        </select>

        <label htmlFor="categories" className="brand"></label>
        <select id="categories" name="categories" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="gaming">Gaming</option>
          <option value="flagship">Flagship</option>
          <option value="balanced">Balanced</option>
          <option value="camera">Camera</option>
          <option value="battery">Battery</option>
          <option value="storage">Storage</option>
          <option value="premium">Premium</option>
          <option value="performance">Performance</option>
          <option value="budget">Budget</option>
        </select>

        <button>SEARCH</button>

      </div>



      <br />
      <div>
        <div>
          
          <h1 className="trend">Hot Deals🔥</h1>
          <Slider {...settings}>
            {filteredData.map((d) => (
              <div className="slide" key={d.id}>

                <div className="slide1">
                  <img className="slide2" src={d.image} alt="" />
                </div>

                <div className="slide3">

                  <p className="slide4">{d.model}</p>
                  <p className="slide5">{d.price}</p>
                  <Link to="/main" state={{ mobile: d }}><button>Read More</button></Link>

                </div>
              </div>

            ))}
            {filteredData.length === 0 && (
              <div className="no-data">
                No mobile found 😔
              </div>
            )}

          </Slider>
        </div>

      </div>
    </form>

  );
}
const data = [

  {
    "id": 1,
    "brand": "OnePlus",
    "model": "15",
    "categories": ["gaming", "flagship", "balanced"],
    "ram": "12GB",
    "storage": "256GB",
    "battery": "5000mAh",
    "price": "₹72,999",
    "image": "https://th.bing.com/th/id/OIP.NqGoCAP_Rqg1OTAPlIPYGAHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 2,
    "brand": "OnePlus",
    "model": "15R",
    "categories": ["gaming", "balanced"],
    "ram": "12GB",
    "storage": "256GB",
    "battery": "5000mAh",
    "price": "₹47,897",
    "camera": "50MP",
    "image": "https://m-cdn.phonearena.com/images/phones/85700-350/OnePlus-15R.webp"
  },
  {
    "id": 3,
    "brand": "Samsung",
    "model": "Galaxy S25 Ultra",
    "categories": ["camera", "flagship", "balanced"],
    "ram": "12GB",
    "storage": "256GB",
    "battery": "5000mAh",
    "price": "₹1,07,380",
    "image": "https://th.bing.com/th/id/OIP.VYQdpOTlT3LP-oo6Awuz9AHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "price_as_of": "Jan 2026",
    "camera": "200MP"
  },
  {
    "id": 4,
    "brand": "Samsung",
    "model": "Galaxy S25 FE",
    "categories": ["balanced", "camera"],
    "ram": "8GB",
    "storage": "128GB",
    "battery": "4800mAh",
    "price": "₹59,999",
    "image": "https://th.bing.com/th/id/OIP.DEgDEuLBUF_GstCMhW7CKgHaHa?w=151&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 5,
    "brand": "Realme",
    "model": "16 Pro 5G",
    "categories": ["balanced", "camera"],
    "ram": "8GB",
    "storage": "128GB",
    "battery": "5000mAh",
    "price": "₹31,999",
    "image": "https://th.bing.com/th/id/OIP.hk_fY3H8enAdoexzE6PybwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "price_as_of": "Jan 2026",
    "camera": "200MP"
  },
  {
    "id": 6,
    "brand": "Realme",
    "model": "16 Pro+ 5G",
    "categories": ["balanced", "camera"],
    "ram": "8GB",
    "storage": "128GB",
    "battery": "5000mAh",
    "price": "₹39,999",
    "image": "https://th.bing.com/th/id/OIP.ew7TSZ61dmy1BV_J7IRUDgHaHa?w=211&h=211&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "price_as_of": "Jan 2026",
    "camera": "200MP"
  },
  {
    "id": 7,
    "brand": "MI",
    "model": "Note 15 5G",
    "categories": ["balanced", "battery", "camera"],
    "ram": "8GB",
    "storage": "128GB",
    "battery": "5520mAh",
    "price": "₹22,999",
    "image": "https://cdn.beebom.com/mobile/redmi-note-15-front-and-back.png",
    "price_as_of": "Jan 2026",
    "camera": "108MP"
  },
  {
    "id": 8,
    "brand": "Oppo",
    "model": "Reno 15 5G",
    "categories": ["camera", "balanced"],
    "ram": "8GB",
    "storage": "256GB",
    "battery": "6500mAh",
    "price": "₹45,999",
    "image": "https://th.bing.com/th/id/OIP.Pk71xNG8yHZID8FNPc9vvQAAAA?w=138&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 9,
    "brand": "Oppo",
    "model": "Reno 15 Pro 5G",
    "categories": ["camera", "premium"],
    "ram": "8GB",
    "storage": "256GB",
    "battery": "6500mAh",
    "price": "₹67,999",
    "image": "https://www.techspecs.info/_next/image/?url=https:%2F%2Fwww.techspecs.info%2Fuploads%2FOPPO_RENO_15_PRO_5_G_f6a90266de.png&w=3840&q=75",
    "price_as_of": "Jan 2026",
    "camera": "200MP"
  },
  {
    "id": 10,
    "brand": "Oppo",
    "model": "Find X9",
    "categories": ["premium", "performance", "camera"],
    "ram": "16GB",
    "storage": "512GB",
    "battery": "7025mAh",
    "price": "₹84,999",
    "image": "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x9-series-en/navigation/find-x9-pro/440-440-white-v2.png",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },

  {
    "id": 11,
    "brand": "iQOO",
    "model": "15",
    "categories": ["gaming", "performance"],
    "ram": "12GB",
    "storage": "256GB",
    "battery": "5000mAh",
    "price": "₹72,977",
    "image": "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1766462828830/0e654de964a7927c91894cbf04a56964.png",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 12,
    "brand": "Vivo",
    "model": "X300 Pro",
    "categories": ["flagship", "camera"],
    "ram": "12GB",
    "storage": "256GB",
    "battery": "5000mAh",
    "price": "₹1,09,999",
    "image": "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1766376360140/25c4e0daa027b285202d26c5413762be.png",
    "price_as_of": "Jan 2026",
    "camera": "200MP"
  },
  {
    "id": 13,
    "brand": "Vivo",
    "model": "X300",
    "categories": ["flagship", "balanced"],
    "ram": "12GB",
    "storage": "256GB",
    "battery": "4800mAh",
    "price": "₹75,999",
    "image": "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1764314809850/01b9956d7c75f64489c5408bdc77d42d.png",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 14,
    "brand": "Apple",
    "model": "iPhone 17 Pro Max",
    "categories": ["camera", "flagship"],
    "ram": "12GB",
    "storage": "256GB",
    "battery": "4832mAh",
    "price": "₹1,49,900",
    "image": "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2Fi_Phone_Device_List_Smart_Website_1280_x_853_i_Phone_17_Pro_1_c26420e4fa.png&w=3840&q=75",
    "price_as_of": "Jan 2026",
    "camera": "48MP"
  },
  {
    "id": 15,
    "brand": "Apple",
    "model": "iPhone 17",
    "categories": ["flagship", "camera"],
    "ram": "8GB",
    "storage": "128GB",
    "battery": "4300mAh",
    "price": "₹82,900",
    "image": "https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-17-white?$device-lg$",
    "price_as_of": "Jan 2026",
    "camera": "48MP"
  },
  {
    "id": 16,
    "brand": "Poco",
    "model": "M8 5G",
    "categories": ["budget", "balanced"],
    "ram": "6GB",
    "storage": "128GB",
    "battery": "5000mAh",
    "price": "₹15,999",
    "camera": "50MP",
    "image": "https://i02.appmifile.com/152_item_sg/07/01/2026/3c1c3a767d64846cf0d2c6f377a0e163.png?thumb=1&q=85",
    "price_as_of": "Jan 2026"
  },
  {
    "id": 17,
    "brand": "Motorola",
    "model": "Edge 60 Fusion",
    "categories": ["balanced", "battery"],
    "ram": "8GB",
    "storage": "128GB",
    "battery": "5000mAh",
    "price": "₹21,990",
    "image": "https://cdn.beebom.com/mobile/motorola-edge-60-fusion-front-and-back-2.png",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 18,
    "brand": "Motorola",
    "model": "Edge 70 5G",
    "categories": ["balanced", "camera"],
    "ram": "8GB",
    "storage": "256GB",
    "battery": "5000mAh",
    "price": "₹29,999",
    "image": "https://p1-ofp.static.pub//fes/cms/2025/12/04/pgsz2zkb7sfrop1mm3ff47fbgvccfe998395.png",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 19,
    "brand": "Oppo",
    "model": "A6 Pro 5G",
    "categories": ["battery", "budget"],
    "ram": "8GB",
    "storage": "128GB",
    "battery": "7000mAh",
    "price": "₹18,999",
    "image": "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/a6-pro-series/navigation/440-440-pink.png",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 20,
    "brand": "Vivo",
    "model": "T3 Ultra",
    "categories": ["balanced", "battery"],
    "ram": "8GB",
    "storage": "128GB",
    "battery": "5500mAh",
    "price": "₹27,999",
    "image": "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1725940159773/efbb376cffa40878ba0dba6fe340d0f5.png",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 21,
    "brand": "Samsung",
    "model": "Galaxy A56",
    "categories": ["balanced", "camera"],
    "ram": "8GB",
    "storage": "256GB",
    "battery": "5000mAh",
    "price": "₹46,999",
    "camera": "50MP",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqmX-N-QToYsS-bSoW3HqFW96XfEVdeJpUgVvVk2z1xItLc39If3wI8IEK09x6YPZYGvHOuKdStiKuAqimIDGFr2s1LRzFwcncblmF812enxCE50FVLgx0q9hEOsUKB0e9G3KDBNk&usqp=CAc",
    "price_as_of": "Jan 2026"
  },
  {
    "id": 22,
    "brand": "Samsung",
    "model": "Galaxy A36",
    "categories": ["balanced", "budget"],
    "ram": "8GB",
    "storage": "256GB",
    "battery": "5000mAh",
    "price": "₹38,499",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSMWzZn2aPC1EGasxWjP4H6ChC7Lm2YqstPkvzS1HxDH8kNoPhQl1q-b_-kWQyebeSH_y2gaDBlE93oKjPm62tgkZisGgwEY5pc7UUZoHC3v_Fdb3zDK4yFE4CJa64kV-1KIgsbxCippg&usqp=CAc",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 23,
    "brand": "Samsung",
    "model": "Galaxy F17 5G",
    "categories": ["battery", "budget"],
    "ram": "6GB",
    "storage": "128GB",
    "battery": "5000mAh",
    "price": "₹16,999",
    "image": "https://m.media-amazon.com/images/I/71UEEAae0qL.jpg",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 24,
    "brand": "Poco",
    "model": "X7 Pro 5G",
    "categories": ["balanced", "gaming"],
    "ram": "8GB",
    "storage": "128GB",
    "battery": "5000mAh",
    "price": "₹21,999",
    "image": "https://s3b.cashify.in/gpro/uploads/2023/02/09222706/poco-x7-pro-front.webp",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 25,
    "brand": "Redmi",
    "model": "Note 13 5G",
    "categories": ["balanced", "budget"],
    "ram": "6GB",
    "storage": "128GB",
    "battery": "5000mAh",
    "price": "₹14,499",
    "image": "https://www.hemfrance.com/37014-thickbox_default/xiaomi-redmi-note-13-5g-dual-sim-667-128-gb-6-gb-ram-black.jpg",
    "price_as_of": "Jan 2026",
    "camera": "108MP"
  },
  {
    "id": 26,
    "brand": "Moto",
    "model": "G96 5G",
    "categories": ["budget", "balanced"],
    "ram": "6GB",
    "storage": "128GB",
    "battery": "5000mAh",
    "price": "₹17,999",
    "image": "https://motorolain.vtexassets.com/arquivos/ids/160805/moto-g96-5g-ecom-render-01-color-4-.png?v=638906801813730000",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 27,
    "brand": "OnePlus",
    "model": "13s",
    "categories": ["balanced", "performance"],
    "ram": "12GB",
    "storage": "256GB",
    "battery": "5000mAh",
    "price": "₹52,685",
    "image": "https://image01-in.oneplus.net/media/202412/17/052a246708df8233d079b3502aeeb327.png",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 28,
    "brand": "Google",
    "model": "Pixel 10 Pro XL",
    "categories": ["camera", "premium"],
    "ram": "12GB",
    "storage": "256GB",
    "battery": "5000mAh",
    "price": "₹1,11,950",
    "image": "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/p/b/s/-original-imahfjsfrg8hhgve.jpeg?q=90",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 29,
    "brand": "Samsung",
    "model": "Galaxy S25+",
    "categories": ["flagship", "camera"],
    "ram": "8GB",
    "storage": "256GB",
    "battery": "4800mAh",
    "price": "₹68,490",
    "image": "https://cdn.beebom.com/mobile/samsung-galaxy-s25-plus-front-and-back-1.png",
    "price_as_of": "Jan 2026",
    "camera": "50MP"
  },
  {
    "id": 30,
    "brand": "Vivo",
    "model": "V60e",
    "categories": ["balanced", "camera"],
    "ram": "8GB",
    "storage": "128GB",
    "battery": "5000mAh",
    "price": "₹27,990",
    "image": "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/a/p/v/-original-imahgjfvtjnqabka.jpeg?q=90",
    "price_as_of": "Jan 2026",
    "camera": "200MP"
  }


]