import styled from "styled-components";

interface ImageOptionsProductAppleType {
    widthImage?: string;
    marginTop?: string;
}

interface SpanOptionsProductsAppleType {
    marginTop?: string;
    type?: string;
    fontSize?: string;
}

interface PurchaseButtonType {
    background: string;
    color: string;
    underline?: boolean;
}

interface OptionTypeInterface {
    selected: boolean;
    width?: string;
    right?: string;
}

interface ColorOptionType {
    color?: string;
}



export const Header = styled.div`
    height: 48px;
    max-height: 44px;
    width: 100%;
    background-color: rgba(0,0,0,0.8);    
    z-index: 9999;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 45px;
`;

export const ItemHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;    
`;

export const TextHeader = styled.div`
    font-size: 13px;
    color: #f5f5f7;
    letter-spacing: .01em;
    opacity: 0.8;
    font-family: 'MyriadProLight';
    cursor: pointer;
`;

export const OptionsProductsApple = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 105px;
    background-color: white;
    width: 100%;
    gap: 30px;
`;

export const ItemOptionsProductsApple = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    cursor: pointer;
`;

export const ImageOptionsProductApple = styled.img<ImageOptionsProductAppleType>`
    width: ${(props => props.widthImage ? props.widthImage : '37px')};
    margin-top: ${(props => props.marginTop ? props.marginTop : '0px')};
`;

export const TextOptionsProductApple = styled.a`
    font-family: 'MyriadProRegular';
    color: rgba(0,0,0,0.8);
    font-size: 12px;
`;

export const SpanOptionsProductsApple = styled.span<SpanOptionsProductsAppleType>`
    font-family: 'MyriadProRegular';
    color: #f56300;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.type === 'span-new-option' ? '400' : 'bold'};    
    position: ${(props) => props.type === 'span-new-option' ? 'absolute' : 'relative'};
    margin-top: ${(props) => props.marginTop};
`;

export const AppleEducationBlock = styled.div`
    height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #f5f5f7;
    color: rgba(0,0,0,0.8);
    margin-top: 20px;
    letter-spacing: -.016em;

    p {
        font-family: 'MyriadProRegular';
        font-size: 14px;
        font-weight: 400;           
    }
        a {
            color: #0077ed;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }    
`;

export const BannerArea = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;

    h1 {
        font-family: 'MyriadProRegular';
        font-size: 56px;
        color: #1D1D1F;
        font-weight: bold;
    }

    h2 {
        font-family: 'MyriadProRegular';
        font-size: 28px;
        color: #1D1D1F;
        font-weight: bold;
        margin-top: -40px;
    }

    p {
        font-family: 'MyriadProLight';
        font-size: 17px;
        color: #1D1D1F;
        font-weight: 600;
        margin-top: -2px;
    }
`;

export const PurchaseButton = styled.button<PurchaseButtonType>`
    font-family: 'MyriadProRegular';
    font-size: 17px;
    color: ${(props)  => props.color};
    background: ${(props)  => props.background};
    cursor: pointer;
    display: inline-block;
    text-align: center;  
    border: none;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 980px;
    
    &:hover {
        text-decoration: ${(props) => props.underline ? 'underline' : 'none'};
    }
`;

export const BannerAreaButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px
`;

export const BannerMacPro = styled.div`
    height: 508px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 54px 0;
    background: black;

    h1 {
        font-family: 'MyriadProRegular';
        font-size: 56px;
        color: #FFFFFF;
        font-weight: bold;
        margin-top: 2px;
    }

    h2 {
        font-family: 'MyriadProRegular';
        font-size: 28px;
        color: #FFFFFF;
        font-weight: bold;
        margin-top: -40px;
    }

    p {
        font-family: 'MyriadProLight';
        font-size: 17px;
        color: #FFFFFF;
        font-weight: 600;
        margin-top: -2px;
    }
`;

export const SelectMac = styled.div`
    padding: 100px 30px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

    h1 {
        font-family: 'MyriadProRegular';
        font-size: 40px;
        color: #1D1D1F;
        font-weight: bold;
        margin-top: 2px;
    }
`;

export const OptionsType = styled.div`
    height: 40px;
    width: 250px;
    border-Bottom: 1px solid #D2D2D7;  
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start; 
    padding: 0px;
    margin:0px;   
    
`;

export const OptionType = styled.div<OptionTypeInterface>`
    color:${(props) => props.selected ? '#1D1D1F' : '#6E6E73'};
    font-family: 'MyriadProRegular';
    font-size: 17px;    
    width: ${(props) => props.width};
    height: 100%;
    border-bottom: 1px solid ${(props) => props.selected ? '#1D1D1F' : '#D2D2D7'};
    cursor: pointer;
    text-align: ${(props) => props.right ? 'right' : 'left'};
`;

export const OptionsMac = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;

    h1 {
        font-size: 25px;
        text-align: center;
        margin-top: 30px
    }
`;

export const OptionMac = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
`;

export const OptionMacImage = styled.img`
    width: 167px;    
`;

export const ColorsOptionMac = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    gap: 5px;
    width:200px;
`;

export const ColorOption = styled.div<ColorOptionType>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(props) => props.color ? props.color : 'back'};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
