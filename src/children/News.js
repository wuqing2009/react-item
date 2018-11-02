import React from 'react'
function News() {
    return (
        <div className="wy-ind-news">
            <i className="news-icon-laba"></i>
            <div className="swiper-container swiper-news swiper-container-vertical">
            <div className="swiper-wrapper" style="transform: translate3d(0px, -68px, 0px); transition-duration: 0ms;">
            <div className="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="1" style="height: 68px;">
                <a href="">蓝之蓝股份成公司上市</a>
            </div>
            <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style="height: 68px;">
                <a href="">热烈祝贺伟义商城成功热烈祝贺伟义商城成功上线热烈祝贺伟义商城成功上线上线</a>
            </div>
            <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style="height: 68px;">
                <a href="">蓝之蓝股份成公司上市</a>
            </div>
            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="height: 68px;">
                <a href="">热烈祝贺伟义商城成功热烈祝贺伟义商城成功上线热烈祝贺伟义商城成功上线上线</a>
            </div>
            </div>
            <div className="swiper-pagination swiper-pagination-bullets">
                <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                <span className="swiper-pagination-bullet"></span>
            </div>
            </div>
            <a href="" className="newsmore">
                <i className="news-icon-more"></i>
            </a>
        </div>
    )
}
export default News