import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import FlashSale from "../components/FlashSale";
import BestSale from "../components/BestSale";
import Banner from "../components/Banner";
import CategorySection from "../components/CategorySection";

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    slider: null,
    flashSale: null,
    banner: null,
    bestSale: null,
  });

  useEffect(() => {
    async function fetchAllData() {
      try {
        const [sliderRes, flashSaleRes, bannerRes, bestSaleRes] = await Promise.all([
          fetch("/api/slider").then((res) => res.json()),
          fetch("/api/flash-sale").then((res) => res.json()),
          fetch("/api/banner").then((res) => res.json()),
          fetch("/api/best-sale").then((res) => res.json()),
        ]);

        setData({
          slider: sliderRes,
          flashSale: flashSaleRes,
          banner: bannerRes,
          bestSale: bestSaleRes,
        });
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <Slider data={data.slider} />
      <FlashSale data={data.flashSale} />
      <CategorySection/>
      <Banner data={data.banner} />
      <BestSale data={data.bestSale} />
    </div>
  );
}

export default Home;
