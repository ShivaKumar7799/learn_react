import React from 'react'
import FlipkartProducts from './FlipkartProducts'

function FlipkartDisplay() {
  return (
    <div>
        <FlipkartProducts ramSize = "6" mobileName = "APPLE iPhone 11 (White, 128 GB)" price = "9499" offer = "14999" mobileImage = "https://rukminim1.flixcart.com/image/312/312/l0sgyvk0/mobile/k/x/c/-original-imagcg22czc3ggvw.jpeg?q=70" />
        <FlipkartProducts ramSize = "2" mobileName = "Nokia (Black, 8 GB)" price = "1161" offer = "1199" mobileImage = "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/m/c/f/-original-imagbe5qknarjywp.jpeg?q=70" />
        <FlipkartProducts price = "7749"  offer = "11999"/>
        <FlipkartProducts price = "23434" offer = "25000" />
        <FlipkartProducts price = "11111" offer = "25000" />
        <FlipkartProducts price = "55555" offer = "25000" />
        <FlipkartProducts price = "12121" offer = "25000" />
        <FlipkartProducts price = "88888" offer = "25000" />
    </div>
  )
}

export default FlipkartDisplay