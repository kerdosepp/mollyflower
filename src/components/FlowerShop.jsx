import styles from "./FlowerShop.module.css";

import FlowerShopItem from "../components/FlowerShopItem.jsx";

import imageTemplate from "../assets/images/SpecialOffer.jpg";



const flowers = [
  { flowerName: "DAWN BLOOM", price: "55", imageUrl: imageTemplate},
  { flowerName: "DAWN BLOOM", price: "55", imageUrl: imageTemplate},
  { flowerName: "DAWN BLOOM", price: "55", imageUrl: imageTemplate},
  { flowerName: "DAWN BLOOM", price: "55", imageUrl: imageTemplate},
  { flowerName: "DAWN BLOOM", price: "55", imageUrl: imageTemplate},
  { flowerName: "DAWN BLOOM", price: "55", imageUrl: imageTemplate},
  { flowerName: "DAWN BLOOM", price: "55", imageUrl: imageTemplate},
];

export default function FlowerShop() {
  return (
    <div className={styles.container}>
      {flowers.map((flower, index) => (
        <FlowerShopItem
          key={index}
          flowerName={flower.flowerName}
          price={flower.price}
          imageUrl={flower.imageUrl}
        />
      ))}
    </div>
  );
}
