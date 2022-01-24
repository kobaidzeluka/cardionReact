import React from 'react';
import Cover from '../components/Cover/Cover';
import './Container.css';
import Service from '../components/Service/Service';
import doctor from '../assets/photos/diana.png'
import {Balloon as ReactComponent } from '../assets/photos/baloon.svg';
function Container() {

    
    const cardio = [
        'კარდიოლოგის კონსულტაცია',
        'ექოკარდიოგრაფია',
        'ელექტროკარდიოგრაფია (ეკგ)'
    ]

    const echo = [
        {
            title: 'მუცლის ღრუს ულტრაბგერითი კვლევა',
            subTitle:'(ღვიძლი, ნაღვლის ბუშტი, სანაღვლე გზები, პანკრუასი, ელენთა)'
        }, 
        {
            title:'საშარდე სისტემის ულტრაბგერითი კვლევა',
            subTitle: '(თირკმელები და შარდის ბუშტი, წინამდებარე ჯირკვალი)'
        },
        {
            title: 'პლევრის ღრუების  ულტრაბგერითი კვლევა'
        }
    ]

    const biographyDesc = [
        '2010 წლიდან დღემდე: მედიქლაბჯორჯია, ექიმი-კარდიოლოგი, ფუნქციური დიაგლოსტიკა, სტაციონარული სამსახურის ექიმი',
        '2014-2020წ: შპს “ისრაელი საქართველოს სამედიცინო კვლევითი კლინიკა ჰელსიკორი”, ექიმი-კარდიოლოგი, მორიგე ექიმი',
        '2016 წლიდან დღემდე: ევექსი, ექიმი-კარდიოლოგი, ფუნქციური დიაგნოსტიკა'
]

    return (
        <section className='container'>
            <Cover />
            <div className='container-middle'>
                <div className='service-profile'>
                    <Service item={cardio} />
                    <div className='profile'>
                        <div className='profile-header'>
                            <div className='profile-img'>
                                <img alt='doctor' src={doctor} />
                            </div>
                            <div className='profile-desc'>
                                <p>დიანა მინდიაშვილი</p>
                                <span>ექიმი კარდიოლოგი</span>
                            </div>
                        </div>
                        <div className='biography'>
                        {
                    biographyDesc.map((item, index) => {
                        return (
                            
                            <div className='desc-line'>
                                
                                {item}  
                            </div>
                            
                        )
                    })
                }
                        </div>
                    </div>
                </div>

             </div>
        </section>
    )
} 

export default Container
