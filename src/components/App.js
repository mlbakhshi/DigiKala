import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./../assets/css/common/shared.scss";
import "./../assets/css/common/icomoon.scss";
import "../assets/css/common/font.scss";
import {withRouter} from "react-router-dom";
import {uiIndexActions} from "../redux/ui/index/index";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import jQuery from "jquery";

let AppDevice = require(`./${process.env.REACT_APP_DEVICE_TYPE}/${process.env.REACT_APP_DEVICE_TYPE}`);

export const App = (props) => {

    window.onbeforeunload = function () {
        //props.uiIndexActions.ClearLoading( );
    };

    props.uiIndexActions.setPath({currentLocation: props.location});

    useEffect(() => {
        let isMounted = true; // note this flag denote mount status
        if(isMounted){
            props.uiIndexActions.SetAlertDialogSlide({open: false});
        }
        return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    (function (window, $) {

        $(function () {

            $('.ripple').on('click', function (event) {
                var $btn = $(this),
                    $div = $('<div></div>'),
                    btnOffset = $btn.offset(),
                    xPos = event.pageX - btnOffset.left,
                    yPos = event.pageY - btnOffset.top;

                $div.addClass('ripple-effect');
                $div
                    .css({
                        height: $btn.height(),
                        width: $btn.height(),
                        top: yPos - ($div.height() / 2),
                        left: xPos - ($div.width() / 2),
                        background: $btn.data("ripple-color") || "#fff"
                    });
                $btn.append($div);

                window.setTimeout(function () {
                    $div.remove();
                }, 1000);
            });

        });

    })(window, jQuery);


    return (
            //eslint-disable-next-line
            <AppDevice.default/>
    );

};

const mapDispatchToProps = dispatch => {
    return {
        uiIndexActions: bindActionCreators(uiIndexActions, dispatch)
    };
};

export default withRouter(connect(
    null,
    mapDispatchToProps
)(App));
