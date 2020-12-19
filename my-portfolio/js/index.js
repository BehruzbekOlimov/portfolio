$(document).ready(function () {
    $(window).on('load',function () {
        $('.loader').addClass('loaded')
        $('body').removeClass('loading')
        setTimeout(
            ()=>{$(window).scrollTop(0)}
            ,200)
        setTimeout(refreshScrollSpy,1000)
        console.log(1)
    })

    let bg = $('.bg-header')
    let dots = []

    function randColor(s) {
        let r = Math.round(Math.random() * (205 - s) + s)
        let g = Math.round(Math.random() * (205 - s) + s)
        let b = Math.round(Math.random() * (205 - s) + s)
        return 'rgb(' + r + ',' + g + ',' + b + ')'
    }

    for (let i = 0; i < 20; i++) {
        let dot = $('<div></div>').addClass('dot')
        dot.css({
            'background-color': randColor(0)
        })
        dots[i] = dot
        bg.append(dot)
    }
    let n = 0
    animation()

    function animation() {
        let l, t;
        t = Math.round(Math.random() * 300 - 150)
        if (Math.random() > 0.5) {
            l = -150
        } else {
            l = 150
        }
        if (Math.abs(t) > 100) {
            l = Math.round(Math.random() * 300 - 150)
            t = (t > 0) ? 150 : -150
        }
        dots[n % dots.length].animate(
            {
                left: l + '%',
                top: t + '%',
                width: 400,
                height: 400,
            }, 6000,function () {
                $(this).css({
                    opacity: 0
                })
            }
        )

        dots[(n + 1) % dots.length].animate({
                top: '50%',
                left: '50%',
                width: 0,
                height: 0,
                'background-color': randColor(0),
            }, 300, function () {
            $(this).css({
                opacity: 0.4
            })
                n++
                animation()
            }
        )
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100){
            $('nav').addClass('nav-active')
        }else {
            $('nav').removeClass('nav-active')
        }
    })

    $('.progress-bar').each(function () {

        let percent=parseInt($(this).data('percent'))
        let containerPercent=$('<div></div>').addClass('percent').css({width:percent+'%'})
        containerPercent.append(percent+' %');
        $(this).append(containerPercent)
    })
})
function refreshScrollSpy() {
    let dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
    dataSpyList.forEach(function (dataSpyEl) {
        bootstrap.ScrollSpy.getInstance(dataSpyEl)
            .refresh()
    })}