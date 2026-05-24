import styles from './FlowerShop.module.css';

import FlowerShopItem from '../components/FlowerShopItem.jsx'

export default function FlowerShop(props) {
  return (
        <div className = {styles.container}> 
            <FlowerShopItem/>
            <FlowerShopItem/>
            <FlowerShopItem/>
            <FlowerShopItem/>
                        <FlowerShopItem/>
            <FlowerShopItem/>
            <FlowerShopItem/>
        </div>
  )
}