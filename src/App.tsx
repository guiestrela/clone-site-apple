import { useState } from 'react'

import { Header, ItemHeader, TextHeader, OptionsProductsApple, ItemOptionsProductsApple, ImageOptionsProductApple, TextOptionsProductApple, SpanOptionsProductsApple, AppleEducationBlock, BannerArea, PurchaseButton, BannerAreaButtons, BannerMacPro, SelectMac, OptionsType, OptionType, OptionsMac, OptionMac, OptionMacImage, ColorsOptionMac, ColorOption } from './AppStyled.ts'
import './fonts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faBagShopping, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import iMac from './assets/images/iMac.svg'
import macAcessories from './assets/images/macAcessories.svg'
import macbookAir from './assets/images/macbookAir.svg'
import macbookPro from './assets/images/macbookPro.svg'
import macCompare from './assets/images/macCompare.svg'
import macDisplays from './assets/images/macDisplays.svg'
import macMini from './assets/images/macMini.svg'
import macOs from './assets/images/macOs.svg'
import macPro from './assets/images/macPro.svg'
import macShop from './assets/images/macShop.svg'
import macStudio from './assets/images/macStudio.svg'
import macbook from './assets/images/macbook.jpeg'
import macbookPro2 from './assets/images/macpro.jpeg'
import mackBookImage from './assets/images/macBookImage.png'
import iconmacM1 from './assets/images/icon-mac-m1.png'
import iconmacM2 from './assets/images/icon-mac-m2.png'



function App() {
  
  const [optionMac, setOptionMac] = useState<boolean>(true);

  return (
    <>
      <Header>
        <ItemHeader>
          <FontAwesomeIcon style={{color: '#f5f5f7', fontSize: '18px', opacity: 0.8, cursor: 'pointer', marginTop: "-5px"}} icon={faApple} />
        </ItemHeader>

        <ItemHeader>
          <TextHeader>
            Loja
          </TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>
            Mac
          </TextHeader>
        </ItemHeader> 
        
        <ItemHeader>
          <TextHeader>
            iPad
          </TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>
            iPhone
          </TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>
            Watch
          </TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>
            AirPads
          </TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>
            TV e Casa
          </TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>
            Só na Apple
          </TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>
            Acessórios
          </TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>
            Suporte
          </TextHeader>
        </ItemHeader>

        <ItemHeader>
          <FontAwesomeIcon style={{color: '#f5f5f7', fontSize: '13px', opacity: 0.8, cursor: 'pointer'}} icon={faMagnifyingGlass} />
        </ItemHeader>

        <ItemHeader>
          <FontAwesomeIcon style={{color: '#f5f5f7', fontSize: '14px', opacity: 0.8, cursor: 'pointer'}} icon={faBagShopping} />
        </ItemHeader>
      </Header>

      <OptionsProductsApple>
        <ItemOptionsProductsApple>
          <ImageOptionsProductApple src={macbookAir} widthImage={"85px"} alt="macbookAir" />
          <TextOptionsProductApple>
            MacBook Air
          </TextOptionsProductApple>
          <SpanOptionsProductsApple marginTop="95px" fontSize="12px" type="span-new-option">
            Novo
          </SpanOptionsProductsApple>
        </ItemOptionsProductsApple>

        <ItemOptionsProductsApple>
          <ImageOptionsProductApple src={macbookPro} widthImage={"85px"} alt="macbookPro" />
          <TextOptionsProductApple>
            MacBook Pro
          </TextOptionsProductApple>
          <SpanOptionsProductsApple marginTop="95px" fontSize='12px' type="span-new-option">
            Novo
          </SpanOptionsProductsApple>
        </ItemOptionsProductsApple>

        <ItemOptionsProductsApple>
          <ImageOptionsProductApple src={iMac} widthImage={"45px"} alt="iMac" />
          <TextOptionsProductApple>
            iMac de 12 pol.
          </TextOptionsProductApple>
        </ItemOptionsProductsApple>

        <ItemOptionsProductsApple>
          <ImageOptionsProductApple src={macMini} widthImage={"30px"} alt="macMini" />
          <TextOptionsProductApple>
            Mac mini
          </TextOptionsProductApple>
        </ItemOptionsProductsApple>

        <ItemOptionsProductsApple>
          <ImageOptionsProductApple src={macStudio} widthImage={"30px"} alt="macStudio" />
          <TextOptionsProductApple>
            Mac Studio
          </TextOptionsProductApple>
        </ItemOptionsProductsApple>

        <ItemOptionsProductsApple>
          <ImageOptionsProductApple src={macPro} widthImage={"40px"} alt="macPro" />
          <TextOptionsProductApple>
            Mac Pro
          </TextOptionsProductApple>
        </ItemOptionsProductsApple>

        <ItemOptionsProductsApple>
          <ImageOptionsProductApple src={macCompare} widthImage={"50px"} alt="macCompare" />
          <TextOptionsProductApple>
            Comparar
          </TextOptionsProductApple>
        </ItemOptionsProductsApple>

        <ItemOptionsProductsApple>
          <ImageOptionsProductApple src={macDisplays} widthImage={"85px"} alt="macDisplays" />
          <TextOptionsProductApple>
            Monitores
          </TextOptionsProductApple>
        </ItemOptionsProductsApple>

        <ItemOptionsProductsApple>
          <ImageOptionsProductApple src={macAcessories} widthImage={"40px"} alt="macAcessories" />
          <TextOptionsProductApple>
            Acessórios
          </TextOptionsProductApple>
        </ItemOptionsProductsApple>

        <ItemOptionsProductsApple>
          <ImageOptionsProductApple src={macOs} widthImage={"45px"} alt="macOs" />
          <TextOptionsProductApple>
            Monterey
          </TextOptionsProductApple>
        </ItemOptionsProductsApple>

        <ItemOptionsProductsApple>
          <ImageOptionsProductApple src={macShop} widthImage={"130px"} alt="macShop" />
          <TextOptionsProductApple>
            Comprar Mac
          </TextOptionsProductApple>
        </ItemOptionsProductsApple>

      </OptionsProductsApple>

      <AppleEducationBlock>
        <p>Economize na compra do MacBook Air e do MacBook Pro de 13 polegadas na Apple Store Educacional*.<a href='#'>Comprar <FontAwesomeIcon style={{fontSize: "9px"}} icon={faChevronRight}/></a></p>
      </AppleEducationBlock>

      <BannerArea>
        <SpanOptionsProductsApple>
          Novo
        </SpanOptionsProductsApple>
        <h1>MacBook Air</h1>
        <h2>Livre, leve e voa.</h2>
        <p>A partir de R$ 13.999</p>

        <BannerAreaButtons>
          <PurchaseButton background="#0077ed" color="white" >Comprar</PurchaseButton>

          <PurchaseButton background="transparent" underline={true} color="#0077ed" >Saiba mais <FontAwesomeIcon style={{fontSize: "11px", marginLeft: "5px"}} icon={faChevronRight}/></PurchaseButton>
        </BannerAreaButtons>
        <ImageOptionsProductApple src={macbook} widthImage="450px" marginTop="75px" alt="macbook" />
      </BannerArea>

      <BannerMacPro>
      <SpanOptionsProductsApple marginTop='45px'>
          Novo
        </SpanOptionsProductsApple>
        <h1>MacBook Pro de 13 pol.</h1>
        <h2>Pro em qualquer lugar.</h2>
        <p>A partir de R$ 15.299</p>

        <BannerAreaButtons>
          <PurchaseButton background="#0077ed" color="white" >Comprar</PurchaseButton>

          <PurchaseButton background="transparent" underline={true} color="#0077ed" >Saiba mais <FontAwesomeIcon style={{fontSize: "11px", marginLeft: "5px"}} icon={faChevronRight}/></PurchaseButton>
        </BannerAreaButtons>
        <ImageOptionsProductApple src={macbookPro2} widthImage="675px" marginTop="10px" alt="macPro" />
      </BannerMacPro>

      <SelectMac>
        <h1>Qual é o Mac ideal para você?</h1>

        <OptionsType>

          <OptionType onClick={() =>{setOptionMac(!optionMac)}} selected={optionMac} width="75px">
            Notebook
          </OptionType>

          <OptionType onClick={() =>{setOptionMac(!optionMac)}} selected={!optionMac} right="left" width="60px">
            Desktop            
          </OptionType>

        </OptionsType>

        <OptionsMac>

          <OptionMac>
            <OptionMacImage src={mackBookImage} alt="macbookimage" />
            <ColorsOptionMac>
              <ColorOption color='#7f7f7f'></ColorOption>
              <ColorOption color='#E4E4E4'></ColorOption>
              <ColorOption color='#DACCBC'></ColorOption>              
            </ColorsOptionMac>

            <h1>MacBook Air.<br/><br/></h1>

          </OptionMac>

          <OptionMac>
            <OptionMacImage src={mackBookImage} alt="macbookimage" />
            <ColorsOptionMac>
              <ColorOption color='#34333A'></ColorOption>
              <ColorOption color='#E4E4E4'></ColorOption>
              <ColorOption color='#7f7f7f'></ColorOption>              
              <ColorOption color='#DACCBC'></ColorOption>
            </ColorsOptionMac>
            
            <h1>MacBook Air.<br/><br/></h1>
            <SpanOptionsProductsApple marginTop="95px" fontSize='10px' type="span-new-option">
            Novo
            </SpanOptionsProductsApple>
          </OptionMac>

          <OptionMac>
            <OptionMacImage src={mackBookImage} alt="macbookimage" />
            <ColorsOptionMac>
              <ColorOption color='#7f7f7f'></ColorOption>
              <ColorOption color='#DACCBC'></ColorOption>
            </ColorsOptionMac>

            <h1>MacBook Pro<br/> de 13 pol.</h1>
            <SpanOptionsProductsApple marginTop="95px" fontSize='10px' type="span-new-option">
            Novo
            </SpanOptionsProductsApple>
          </OptionMac>

          <OptionMac>
            <OptionMacImage src={mackBookImage} alt="macbookimage" />
            <ColorsOptionMac>
              <ColorOption color='#7f7f7f'></ColorOption>
              <ColorOption color='#E4E4E4'></ColorOption>              
            </ColorsOptionMac>

            <h1>MacBook Pro<br/> 14 e 16 pol.</h1>

          </OptionMac>

        </OptionsMac>
        
        
      </SelectMac>

    </>
  )
}

export default App
