import React from 'react'
import 'weui'

function OrderCenter() {
    return (
        <div className="weui-panel">
        <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_small-appmsg">
                <div className="weui-cells">
                    <div className="weui-cell weui-cell_access">
                        <div className="weui-cell__bd weui-cell_primary">
                            <p className="font-14"><span className="mg-r-10">配送方式</span><span className="fr">快递</span></p>
                        </div>
                    </div>
                    <div className="weui-cell weui-cell_access" href="javascript:;">
                        <div className="weui-cell__bd weui-cell_primary">
                            <p className="font-14">
                                <span className="mg-r-10">运费</span>
                                <span className="fr txt-color-red"><em className="">包邮</em></span>
                            </p>
                        </div>
                    </div>
                    <a className="weui-cell weui-cell_access" href="javascript::">
                        <div className="weui-cell__bd weui-cell_primary">
                            <p className="font-14">
                                <span className="mg-r-10">可用蓝豆</span>
                                <span className="sitem-tip"><em className="">1235</em>个</span>
                            </p>
                        </div>
                        <span className="weui-cell__ft"></span>
                    </a>
                    <a className="weui-cell weui-cell_access" href="javascript:;">
                        <div className="weui-cell__bd weui-cell_primary">
                            <p className="font-14">
                                <span className="mg-r-10">优惠券</span>
                                <span className="sitem-tip"><em className="">0</em>张可用</span>
                            </p>
                        </div>
                        <span className="weui-cell__ft"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default OrderCenter 

