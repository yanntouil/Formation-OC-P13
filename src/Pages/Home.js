import React from 'react'
import iconChatImg from '../assets/images/icon-chat.png'
import iconMoneyImg from '../assets/images/icon-money.png'
import iconSecurityImg from '../assets/images/icon-security.png'
import Features from '../Components/Ui/Features'
import FeaturesItem from '../Components/Ui/FeaturesItem'
import Hero from '../Components/Ui/Hero'
import HeroSubtitle from '../Components/Ui/HeroSubtitle'
import HeroText from '../Components/Ui/HeroText'

/**
 * Homepage
 * @component
 */
export default function Home() {
    return (
        <main className="main">
            <Hero srTitle="Promoted Content"> 
                <HeroSubtitle>No fees.</HeroSubtitle>
                <HeroSubtitle>No minimum deposit.</HeroSubtitle>
                <HeroSubtitle>High interest rates.</HeroSubtitle>
                <HeroText>Open a savings account with Argent Bank today!</HeroText>
            </Hero>
            <Features srTitle="Features">
                <FeaturesItem picture={iconChatImg} pictureAlt="Chat Icon">
                    <h3>You are our #1 priority</h3>
                    <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
                </FeaturesItem>
                <FeaturesItem picture={iconMoneyImg} pictureAlt="Money Icon">
                    <h3>More savings means higher rates</h3>
                    <p>The more you save with us, the higher your interest rate will be!</p>
                </FeaturesItem>
                <FeaturesItem picture={iconSecurityImg} pictureAlt="Shield check Icon">
                    <h3>Security you can trust</h3>
                    <p>We use top of the line encryption to make sure your data and money is always safe.</p>
                </FeaturesItem>
            </Features>
        </main>
    )
}
