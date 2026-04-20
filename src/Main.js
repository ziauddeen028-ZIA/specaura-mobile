import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Mobile.json";
import "./Main.css";

function Main(){
    const location = useLocation();
    const [selectedMobile, setSelectedMobile] = useState(null);

    const data = [

    {
        "id":  1,
        "brand":  "OnePlus",
        "model":  "15",
        "categories":  [
                           "gaming",
                           "flagship",
                           "balanced"
                       ],
        "ram":  "12GB",
        "storage":  "256GB",
        "battery":  "5000mAh",
        "price":  "₹72,999",
        "image":  "/images/one plus id 1.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=OnePlus+15",
        "flipkart": "https://www.flipkart.com/search?q=OnePlus+15",
        "croma": "https://www.croma.com/search?q=OnePlus+15",
        "reliance": "https://www.reliancedigital.in/search?q=OnePlus+15"
    },
    {
        "id":  2,
        "brand":  "OnePlus",
        "model":  "15R",
        "categories":  [
                           "gaming",
                           "balanced"
                       ],
        "ram":  "12GB",
        "storage":  "256GB",
        "battery":  "5000mAh",
        "price":  "₹47,897",
        "image":  "/images/OnePlus-15R ID 2.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=OnePlus+15R",
        "flipkart": "https://www.flipkart.com/search?q=OnePlus+15R",
        "croma": "https://www.croma.com/search?q=OnePlus+15R",
        "reliance": "https://www.reliancedigital.in/search?q=OnePlus+15R"
    },
    {
        "id":  3,
        "brand":  "Samsung",
        "model":  "Galaxy S25 Ultra",
        "categories":  [
                           "camera",
                           "flagship",
                           "balanced"
                       ],
        "ram":  "12GB",
        "storage":  "256GB",
        "battery":  "5000mAh",
        "price":  "₹1,07,380",
        "image":  "/images/SAMSUNG GALAXY S25 ID 3.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Samsung+Galaxy+S25+Ultra",
        "flipkart": "https://www.flipkart.com/search?q=Samsung+Galaxy+S25+Ultra",
        "croma": "https://www.croma.com/search?q=Samsung+Galaxy+S25+Ultra",
        "reliance": "https://www.reliancedigital.in/search?q=Samsung+Galaxy+S25+Ultra"
    },
    {
        "id":  4,
        "brand":  "Samsung",
        "model":  "Galaxy S25 FE",
        "categories":  [
                           "balanced",
                           "camera"
                       ],
        "ram":  "8GB",
        "storage":  "128GB",
        "battery":  "4800mAh",
        "price":  "₹59,999",
        "image":  "/images/SAMSUNG GALAXY S25 FE ID 4.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Samsung+Galaxy+S25+FE",
        "flipkart": "https://www.flipkart.com/search?q=Samsung+Galaxy+S25+FE",
        "croma": "https://www.croma.com/search?q=Samsung+Galaxy+S25+FE",
        "reliance": "https://www.reliancedigital.in/search?q=Samsung+Galaxy+S25+FE"
    },
    {
        "id":  5,
        "brand":  "Realme",
        "model":  "16 Pro 5G",
        "categories":  [
                           "balanced",
                           "camera"
                       ],
        "ram":  "8GB",
        "storage":  "128GB",
        "battery":  "5000mAh",
        "price":  "₹31,999",
        "image":  "/images/REALME 16 PRO ID 5.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Realme+16+Pro+5G",
        "flipkart": "https://www.flipkart.com/search?q=Realme+16+Pro+5G",
        "croma": "https://www.croma.com/search?q=Realme+16+Pro+5G",
        "reliance": "https://www.reliancedigital.in/search?q=Realme+16+Pro+5G"
    },
    {
        "id":  6,
        "brand":  "Realme",
        "model":  "16 Pro+ 5G",
        "categories":  [
                           "balanced",
                           "camera"
                       ],
        "ram":  "8GB",
        "storage":  "128GB",
        "battery":  "5000mAh",
        "price":  "₹39,999",
        "image":  "/images/REALME 16 PRO PLUS ID 6.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Realme+16+Pro+Plus",
        "flipkart": "https://www.flipkart.com/search?q=Realme+16+Pro+Plus",
        "croma": "https://www.croma.com/search?q=Realme+16+Pro+Plus",
        "reliance": "https://www.reliancedigital.in/search?q=Realme+16+Pro+Plus"
    },
    {
        "id":  7,
        "brand":  "MI",
        "model":  "Note 15 5G",
        "categories":  [
                           "balanced",
                           "battery",
                           "camera"
                       ],
        "ram":  "8GB",
        "storage":  "128GB",
        "battery":  "5520mAh",
        "price":  "₹22,999",
        "image":  "/images/redmi-note-15-front-and-back ID 7.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Redmi+Note+15+5G",
        "flipkart": "https://www.flipkart.com/search?q=Redmi+Note+15+5G",
        "croma": "https://www.croma.com/search?q=Redmi+Note+15+5G",
        "reliance": "https://www.reliancedigital.in/search?q=Redmi+Note+15+5G"
    },
    {
        "id":  8,
        "brand":  "OPPO",
        "model":  "Reno 15 5G",
        "categories":  [
                           "camera",
                           "balanced"
                       ],
        "ram":  "8GB",
        "storage":  "256GB",
        "battery":  "6500mAh",
        "price":  "₹45,999",
        "image":  "/images/OPPO RENO 15 ID 8.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=OPPO+Reno+15+5G",
        "flipkart": "https://www.flipkart.com/search?q=OPPO+Reno+15+5G",
        "croma": "https://www.croma.com/search?q=OPPO+Reno+15+5G",
        "reliance": "https://www.reliancedigital.in/search?q=OPPO+Reno+15+5G"
    },
    {
        "id":  9,
        "brand":  "OPPO",
        "model":  "Reno 15 Pro 5G",
        "categories":  [
                           "camera",
                           "premium"
                       ],
        "ram":  "8GB",
        "storage":  "256GB",
        "battery":  "6500mAh",
        "price":  "₹67,999",
        "image":  "/images/OPPO_RENO_15_PRO_5_G_ ID 9.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=OPPO+Reno+15+Pro+5G",
        "flipkart": "https://www.flipkart.com/search?q=OPPO+Reno+15+Pro+5G",
        "croma": "https://www.croma.com/search?q=OPPO+Reno+15+Pro+5G",
        "reliance": "https://www.reliancedigital.in/search?q=OPPO+Reno+15+Pro+5G"
    },
    {
        "id":  10,
        "brand":  "OPPO",
        "model":  "Reno 15 Pro Mini",
        "categories":  [
                           "camera",
                           "balanced"
                       ],
        "ram":  "8GB",
        "storage":  "256GB",
        "battery":  "6500mAh",
        "price":  "₹59,999",
        "image":  "/images/OPPO_RENO_15_PRO_5_G_ ID 9.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=OPPO+Reno+15+Pro+Mini",
        "flipkart": "https://www.flipkart.com/search?q=OPPO+Reno+15+Pro+Mini",
        "croma": "https://www.croma.com/search?q=OPPO+Reno+15+Pro+Mini",
        "reliance": "https://www.reliancedigital.in/search?q=OPPO+Reno+15+Pro+Mini"
    },
    {
        "id":  11,
        "brand":  "iQOO",
        "model":  "15",
        "categories":  [
                           "gaming",
                           "performance"
                       ],
        "ram":  "12GB",
        "storage":  "256GB",
        "battery":  "5000mAh",
        "price":  "₹72,977",
        "image":  "/images/IQOO 15 ID 11.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=iQOO+15",
        "flipkart": "https://www.flipkart.com/search?q=iQOO+15",
        "croma": "https://www.croma.com/search?q=iQOO+15",
        "reliance": "https://www.reliancedigital.in/search?q=iQOO+15"
    },
    {
        "id":  12,
        "brand":  "Vivo",
        "model":  "X300 Pro",
        "categories":  [
                           "flagship",
                           "camera"
                       ],
        "ram":  "12GB",
        "storage":  "256GB",
        "battery":  "5000mAh",
        "price":  "₹1,09,999",
        "image":  "/images/VIVO X 300 ID 12.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Vivo+X300+Pro",
        "flipkart": "https://www.flipkart.com/search?q=Vivo+X300+Pro",
        "croma": "https://www.croma.com/search?q=Vivo+X300+Pro",
        "reliance": "https://www.reliancedigital.in/search?q=Vivo+X300+Pro"
    },
    {
        "id":  13,
        "brand":  "Vivo",
        "model":  "X300",
        "categories":  [
                           "flagship",
                           "balanced"
                       ],
        "ram":  "12GB",
        "storage":  "256GB",
        "battery":  "4800mAh",
        "price":  "₹75,999",
        "image":  "/images/VIVO X 300 ID 13.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Vivo+X300",
        "flipkart": "https://www.flipkart.com/search?q=Vivo+X300",
        "croma": "https://www.croma.com/search?q=Vivo+X300",
        "reliance": "https://www.reliancedigital.in/search?q=Vivo+X300"
    },
    {
        "id":  14,
        "brand":  "Apple",
        "model":  "iPhone 17 Pro Max",
        "categories":  [
                           "camera",
                           "flagship"
                       ],
        "ram":  "12GB",
        "storage":  "256GB",
        "battery":  "4832mAh",
        "price":  "₹1,49,900",
        "image":  "/images/IPHONE 17 PRO MAX ID 14.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=iPhone+17+Pro+Max",
        "flipkart": "https://www.flipkart.com/search?q=iPhone+17+Pro+Max",
        "croma": "https://www.croma.com/search?q=iPhone+17+Pro+Max",
        "reliance": "https://www.reliancedigital.in/search?q=iPhone+17+Pro+Max"
    },
    {
        "id":  15,
        "brand":  "Apple",
        "model":  "iPhone 17",
        "categories":  [
                           "flagship",
                           "camera"
                       ],
        "ram":  "8GB",
        "storage":  "128GB",
        "battery":  "4300mAh",
        "price":  "₹82,900",
        "image":  "/images/apple-iphone-17-white.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=iPhone+17",
        "flipkart": "https://www.flipkart.com/search?q=iPhone+17",
        "croma": "https://www.croma.com/search?q=iPhone+17",
        "reliance": "https://www.reliancedigital.in/search?q=iPhone+17"
    },
    {
        "id":  16,
        "brand":  "POCO",
        "model":  "M8 5G",
        "categories":  [
                           "budget",
                           "balanced"
                       ],
        "ram":  "6GB",
        "storage":  "128GB",
        "battery":  "5000mAh",
        "price":  "₹15,999",
        "image":  "/images/poco m8.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=POCO+M8+5G",
        "flipkart": "https://www.flipkart.com/search?q=POCO+M8+5G",
        "croma": "https://www.croma.com/search?q=POCO+M8+5G",
        "reliance": "https://www.reliancedigital.in/search?q=POCO+M8+5G"
    },
    {
        "id":  17,
        "brand":  "Motorola",
        "model":  "Edge 60 Fusion",
        "categories":  [
                           "balanced",
                           "battery"
                       ],
        "ram":  "8GB",
        "storage":  "128GB",
        "battery":  "5000mAh",
        "price":  "₹21,990",
        "image":  "/images/motorola-edge-60-fusion-front-and-back-2.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Motorola+Edge+60+Fusion",
        "flipkart": "https://www.flipkart.com/search?q=Motorola+Edge+60+Fusion",
        "croma": "https://www.croma.com/search?q=Motorola+Edge+60+Fusion",
        "reliance": "https://www.reliancedigital.in/search?q=Motorola+Edge+60+Fusion"
    },
    {
        "id":  18,
        "brand":  "Motorola",
        "model":  "Edge 70 5G",
        "categories":  [
                           "balanced",
                           "camera"
                       ],
        "ram":  "8GB",
        "storage":  "256GB",
        "battery":  "5000mAh",
        "price":  "₹29,999",
        "image":  "/images/Motorola edge 70 fusion.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Motorola+Edge+70+5G",
        "flipkart": "https://www.flipkart.com/search?q=Motorola+Edge+70+5G",
        "croma": "https://www.croma.com/search?q=Motorola+Edge+70+5G",
        "reliance": "https://www.reliancedigital.in/search?q=Motorola+Edge+70+5G"
    },
    {
        "id":  19,
        "brand":  "Oppo",
        "model":  "A6 Pro 5G",
        "categories":  [
                           "battery",
                           "budget"
                       ],
        "ram":  "8GB",
        "storage":  "128GB",
        "battery":  "7000mAh",
        "price":  "₹18,999",
        "image":  "/images/oppo a6.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Oppo+A6+Pro+5G",
        "flipkart": "https://www.flipkart.com/search?q=Oppo+A6+Pro+5G",
        "croma": "https://www.croma.com/search?q=Oppo+A6+Pro+5G",
        "reliance": "https://www.reliancedigital.in/search?q=Oppo+A6+Pro+5G"
    },
    {
        "id":  20,
        "brand":  "Vivo",
        "model":  "T3 Ultra",
        "categories":  [
                           "balanced",
                           "battery"
                       ],
        "ram":  "8GB",
        "storage":  "128GB",
        "battery":  "5500mAh",
        "price":  "₹27,999",
        "image":  "/images/vivo t3.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Vivo+T3+Ultra",
        "flipkart": "https://www.flipkart.com/search?q=Vivo+T3+Ultra",
        "croma": "https://www.croma.com/search?q=Vivo+T3+Ultra",
        "reliance": "https://www.reliancedigital.in/search?q=Vivo+T3+Ultra"
    },
    {
        "id":  21,
        "brand":  "Samsung",
        "model":  "Galaxy A56",
        "categories":  [
                           "balanced",
                           "camera"
                       ],
        "ram":  "8GB",
        "storage":  "256GB",
        "battery":  "5000mAh",
        "price":  "₹46,999",
        "image":  "/images/galaxy a56.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Samsung+Galaxy+A56",
        "flipkart": "https://www.flipkart.com/search?q=Samsung+Galaxy+A56",
        "croma": "https://www.croma.com/search?q=Samsung+Galaxy+A56",
        "reliance": "https://www.reliancedigital.in/search?q=Samsung+Galaxy+A56"
    },
    {
        "id":  22,
        "brand":  "Samsung",
        "model":  "Galaxy A36",
        "categories":  [
                           "balanced",
                           "budget"
                       ],
        "ram":  "8GB",
        "storage":  "256GB",
        "battery":  "5000mAh",
        "price":  "₹38,499",
        "image":  "/images/galaxy a36.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Samsung+Galaxy+A36",
        "flipkart": "https://www.flipkart.com/search?q=Samsung+Galaxy+A36",
        "croma": "https://www.croma.com/search?q=Samsung+Galaxy+A36",
        "reliance": "https://www.reliancedigital.in/search?q=Samsung+Galaxy+A36"
    },
    {
        "id":  23,
        "brand":  "Samsung",
        "model":  "Galaxy F17 5G",
        "categories":  [
                           "battery",
                           "budget"
                       ],
        "ram":  "6GB",
        "storage":  "128GB",
        "battery":  "5000mAh",
        "price":  "₹16,999",
        "image":  "/images/galxy f17.jpg",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Samsung+Galaxy+F17+5G",
        "flipkart": "https://www.flipkart.com/search?q=Samsung+Galaxy+F17+5G",
        "croma": "https://www.croma.com/search?q=Samsung+Galaxy+F17+5G",
        "reliance": "https://www.reliancedigital.in/search?q=Samsung+Galaxy+F17+5G"
    },
    {
        "id":  24,
        "brand":  "POCO",
        "model":  "X7 Pro 5G",
        "categories":  [
                           "balanced",
                           "gaming"
                       ],
        "ram":  "8GB",
        "storage":  "128GB",
        "battery":  "5000mAh",
        "price":  "₹21,999",
        "image":  "/images/poco-x7-pro-front.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=POCO+X7+Pro+5G",
        "flipkart": "https://www.flipkart.com/search?q=POCO+X7+Pro+5G",
        "croma": "https://www.croma.com/search?q=POCO+X7+Pro+5G",
        "reliance": "https://www.reliancedigital.in/search?q=POCO+X7+Pro+5G"
    },
    {
        "id":  25,
        "brand":  "Redmi",
        "model":  "Note 13 5G",
        "categories":  [
                           "balanced",
                           "budget"
                       ],
        "ram":  "6GB",
        "storage":  "128GB",
        "battery":  "5000mAh",
        "price":  "₹14,499",
        "image":  "/images/xiaomi-redmi-note-13-5g.jpg",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Redmi+Note+13+5G",
        "flipkart": "https://www.flipkart.com/search?q=Redmi+Note+13+5G",
        "croma": "https://www.croma.com/search?q=Redmi+Note+13+5G",
        "reliance": "https://www.reliancedigital.in/search?q=Redmi+Note+13+5G"
    },
    {
        "id":  26,
        "brand":  "Moto",
        "model":  "G96 5G",
        "categories":  [
                           "budget",
                           "balanced"
                       ],
        "ram":  "6GB",
        "storage":  "128GB",
        "battery":  "5000mAh",
        "price":  "₹17,999",
        "image":  "/images/moto-g96.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Moto+G96+5G",
        "flipkart": "https://www.flipkart.com/search?q=Moto+G96+5G",
        "croma": "https://www.croma.com/search?q=Moto+G96+5G",
        "reliance": "https://www.reliancedigital.in/search?q=Moto+G96+5G"
    },
    {
        "id":  27,
        "brand":  "OnePlus",
        "model":  "13s",
        "categories":  [
                           "balanced",
                           "performance"
                       ],
        "ram":  "12GB",
        "storage":  "256GB",
        "battery":  "5000mAh",
        "price":  "₹52,685",
        "image":  "/images/One Plus 13s.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=OnePlus+13s",
        "flipkart": "https://www.flipkart.com/search?q=OnePlus+13s",
        "croma": "https://www.croma.com/search?q=OnePlus+13s",
        "reliance": "https://www.reliancedigital.in/search?q=OnePlus+13s"
    },
    {
        "id":  28,
        "brand":  "Google",
        "model":  "Pixel 10 Pro XL",
        "categories":  [
                           "camera",
                           "premium"
                       ],
        "ram":  "12GB",
        "storage":  "256GB",
        "battery":  "5000mAh",
        "price":  "₹1,11,950",
        "image":  "/images/google pixel.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Google+Pixel+10+Pro+XL",
        "flipkart": "https://www.flipkart.com/search?q=Google+Pixel+10+Pro+XL",
        "croma": "https://www.croma.com/search?q=Google+Pixel+10+Pro+XL",
        "reliance": "https://www.reliancedigital.in/search?q=Google+Pixel+10+Pro+XL"
    },
    {
        "id":  29,
        "brand":  "Samsung",
        "model":  "Galaxy S25+",
        "categories":  [
                           "flagship",
                           "camera"
                       ],
        "ram":  "8GB",
        "storage":  "256GB",
        "battery":  "4800mAh",
        "price":  "₹68,490",
        "image":  "/images/samsung-galaxy-s25-plus-front-and-back-1.png",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Samsung+Galaxy+S25+Plus",
        "flipkart": "https://www.flipkart.com/search?q=Samsung+Galaxy+S25+Plus",
        "croma": "https://www.croma.com/search?q=Samsung+Galaxy+S25+Plus",
        "reliance": "https://www.reliancedigital.in/search?q=Samsung+Galaxy+S25+Plus"
    },
    {
        "id":  30,
        "brand":  "Vivo",
        "model":  "V60e",
        "categories":  [
                           "balanced",
                           "camera"
                       ],
        "ram":  "8GB",
        "storage":  "128GB",
        "battery":  "5000mAh",
        "price":  "₹27,990",
        "image":  "/images/vivo v60e.webp",
        "price_as_of":  "Jan 2026",
        "camera":  "48MP",
        "amazon": "https://www.amazon.in/s?k=Vivo+V60e",
        "flipkart": "https://www.flipkart.com/search?q=Vivo+V60e",
        "croma": "https://www.croma.com/search?q=Vivo+V60e",
        "reliance": "https://www.reliancedigital.in/search?q=Vivo+V60e"
    }


]

    useEffect(() => {
        if (location.state && location.state.mobile) {
            // Find the complete mobile data from data array by id
            const completeMobileData = data.find(m => m.id === location.state.mobile.id);
            setSelectedMobile(completeMobileData || location.state.mobile);
        } else {
            // Set default mobile if none selected
            setSelectedMobile(data[0]);
        }
    }, [location.state]);

    return (
        <div className="full">

            <div className="container">

                <div className="image-container">
                    <img src={selectedMobile?.image} alt={selectedMobile?.model || "Mobile"} />
                </div>

                <div className="detail-container">
                    <h3>MOBILE : {selectedMobile?.brand} {selectedMobile?.model}</h3>
                    <h3>RAM : {selectedMobile?.ram}</h3>
                    <h3>STORAGE : {selectedMobile?.storage}</h3>
                    <h3>BATTERY : {selectedMobile?.battery}</h3>
                    <h3>CAMERA : {selectedMobile?.camera}</h3>
                    <h3>PRICE : {selectedMobile?.price}</h3>
                    <h3>CATEGORIES : {selectedMobile?.categories?.join(", ")}</h3>
                </div>

            </div>
            <div className="lastDiv">
                <Link to="/check" state={{ mobile: selectedMobile }}><button className="check-btn">CHECK</button></Link>
                
            </div>

        </div>

    );
}

export default Main;