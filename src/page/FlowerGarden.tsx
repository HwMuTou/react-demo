import * as React from "react";

import style from "./Flower.module.css";

export class FlowerGarden extends React.Component {

    render() {
        return (
            <div className={style.pageWrapper}>
                <div className={style.page}>
                    <div className={style.header}>
                        <p>DOWNLOAD THE EXAMPLE HTML FILE AND CSS FILE</p>
                    </div>

                    <div className={style.content}>
                        <div className={style.mainContent}>
                            <div className={style.paragraph}>
                                <h3 className={style.preamble}>The Road to Enlightenment</h3>
                                <p>Littering a dark and dreary road lay the past relics of browser-specific tags,
                                    incompatible DOMs, broken CSS support, and abandoned browsers.</p>
                                <p>We must clear the mind of the past. Web enlightenment has been achieved thanks to the
                                    tireless efforts of folk like the W3C, WaSP, and the major browser creators.</p>
                                <p>Littering a dark and dreary road lay the past relics of browser-specific tags,
                                    incompatible DOMs, broken CSS support, and abandoned browsers.</p>
                            </div>

                            <div className={style.paragraph}>
                                <h3 className={style.explanation}>So What is This About?</h3>
                                <p>There is a continuing need to show the power of CSS. The Zen Garden aims to excite,
                                    inspire, and encourage participation. To begin, view some of the existing designs in
                                    the list. Clicking on any one will load the style sheet into this very page. The
                                    HTML remains the same, the only thing that has changed is the external CSS file.
                                    Yes, really.</p>
                                <p>CSS allows complete and total control over the style of a hypertext document. The
                                    only way this can be illustrated in a way that gets people excited is by
                                    demonstrating what it can truly be, once the reins are placed in the hands of those
                                    able to create beauty from structure. Designers and coders alike have contributed to
                                    the beauty of the web; we can always push it further.</p>
                            </div>

                            <div className={style.paragraph}>
                                <h3 className={style.participation}>Participation</h3>
                                <p>Strong visual design has always been our focus. You are modifying this page, so
                                    strong <abbr title="Cascading Style Sheets">CSS</abbr> skills are necessary too, but
                                    the example files are commented well enough that even <abbr
                                        title="Cascading Style Sheets">CSS</abbr> novices can use them as starting
                                    points. Please see the <a href="http://www.mezzoblue.com/zengarden/resources/"
                                                              title="A listing of CSS-related resources"><abbr
                                        title="Cascading Style Sheets">CSS</abbr> Resource Guide</a> for advanced
                                    tutorials and tips on working with <abbr title="Cascading Style Sheets">CSS</abbr>.
                                </p>
                                <p>You may modify the style sheet in any way you wish, but not the <abbr
                                    title="HyperText Markup Language">HTML</abbr>. This may seem daunting at first if
                                    you’ve never worked this way before, but follow the listed links to learn more, and
                                    use the sample files as a guide.</p>
                                <p>Download the sample <a href="/examples/index"
                                                          title="This page's source HTML code, not to be modified.">HTML</a> and <a
                                    href="/examples/style.css"
                                    title="This page's sample CSS, the file you may modify.">CSS</a> to work on a copy
                                    locally. Once you have completed your masterpiece (and please, don’t submit
                                    half-finished work) upload your <abbr title="Cascading Style Sheets">CSS</abbr> file
                                    to a web server under your control. <a
                                        href="http://www.mezzoblue.com/zengarden/submit/"
                                        title="Use the contact form to send us your CSS file">Send us a link</a> to an
                                    archive of that file and all associated assets, and if we choose to use it we will
                                    download it and place it on our server.</p>
                            </div>

                            <div className={style.paragraph}>
                                <h3 className={style.benefits}>Benefits</h3>
                                <p>Why participate? For recognition, inspiration, and a resource we can all refer to
                                    showing people how amazing <abbr title="Cascading Style Sheets">CSS</abbr> really
                                    can be. This site serves as equal parts inspiration for those working on the web
                                    today, learning tool for those who will be tomorrow, and gallery of future
                                    techniques we can all look forward to.</p>
                            </div>

                            <div className={style.paragraph}>
                                <h3 className={style.requirements}>Requirements</h3>
                                <p>Where possible, we would like to see mostly <abbr
                                    title="Cascading Style Sheets, levels 1 and 2">CSS 1 &amp; 2</abbr> usage. <abbr
                                    title="Cascading Style Sheets, levels 3 and 4">CSS 3 &amp; 4</abbr> should be
                                    limited to widely-supported elements only, or strong fallbacks should be provided.
                                    The CSS Zen Garden is about functional, practical <abbr
                                        title="Cascading Style Sheets">CSS</abbr> and not the latest bleeding-edge
                                    tricks viewable by 2% of the browsing public. The only real requirement we have is
                                    that your <abbr title="Cascading Style Sheets">CSS</abbr> validates.</p>
                                <p>Luckily, designing this way shows how well various browsers have implemented <abbr
                                    title="Cascading Style Sheets">CSS</abbr> by now. When sticking to the guidelines
                                    you should see fairly consistent results across most modern browsers. Due to the
                                    sheer number of user agents on the web these days — especially when you factor in
                                    mobile — pixel-perfect layouts may not be possible across every platform. That’s
                                    okay, but do test in as many as you can. Your design should work in at least IE9+
                                    and the latest Chrome, Firefox, iOS and Android browsers (run by over 90% of the
                                    population).</p>
                                <p>We ask that you submit original artwork. Please respect copyright laws. Please keep
                                    objectionable material to a minimum, and try to incorporate unique and interesting
                                    visual themes to your work. We’re well past the point of needing another
                                    garden-related design.</p>
                                <p>This is a learning exercise as well as a demonstration. You retain full copyright on
                                    your graphics (with limited exceptions, see <a
                                        href="http://www.mezzoblue.com/zengarden/submit/guidelines/">submission
                                        guidelines</a>), but we ask you release your <abbr
                                        title="Cascading Style Sheets">CSS</abbr> under a Creative Commons license
                                    identical to the <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/"
                                                        title="View the Zen Garden's license information.">one on this
                                        site</a> so that others may learn from your work.</p>
                                <p role="contentinfo">By <a href="http://www.mezzoblue.com/">Dave Shea</a>. Bandwidth
                                    graciously donated by <a href="http://www.mediatemple.net/">mediatemple</a>. Now
                                    available: <a
                                        href="http://www.amazon.com/exec/obidos/ASIN/0321303474/mezzoblue-20/">Zen
                                        Garden, the book</a>.</p>
                            </div>
                        </div>

                        <div className={style.sidebarContent}>

                            <div className={style.designSelection}>
                                <h3>Select a Design:</h3>
                                <nav role="navigation">
                                    <ul>
                                        <li>
                                            <a href="/221/" className={style.designName}>Mid Century Modern</a> by <a
                                            href="http://andrewlohman.com/" className={style.designerName}>Andrew
                                            Lohman</a>
                                        </li>
                                        <li>
                                            <a href="/220/" className={style.designName}>Garments</a> by <a
                                            href="http://danielmall.com/" className={style.designerName}>Dan Mall</a>
                                        </li>
                                        <li>
                                            <a href="/219/" className={style.designName}>Steel</a> by <a
                                            href="http://steffen-knoeller.de" className={style.designerName}>Steffen
                                            Knoeller</a>
                                        </li>
                                        <li>
                                            <a href="/218/" className={style.designName}>Apothecary</a> by <a
                                            href="http://trentwalton.com" className={style.designerName}>Trent
                                            Walton</a>
                                        </li>
                                        <li>
                                            <a href="/217/" className={style.designName}>Screen Filler</a> by <a
                                            href="http://elliotjaystocks.com/" className={style.designerName}>Elliot Jay
                                            Stocks</a>
                                        </li>
                                        <li>
                                            <a href="/216/" className={style.designName}>Fountain Kiss</a> by <a
                                            href="http://jeremycarlson.com" className={style.designerName}>Jeremy
                                            Carlson</a>
                                        </li>
                                        <li>
                                            <a href="/215/" className={style.designName}>A Robot Named Jimmy</a> by <a
                                            href="http://meltmedia.com/" className={style.designerName}>meltmedia</a>
                                        </li>
                                        <li>
                                            <a href="/214/" className={style.designName}>Verde Moderna</a> by <a
                                            href="http://www.mezzoblue.com/" className={style.designerName}>Dave
                                            Shea</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className={style.designArchives}>
                                <h3>Archives:</h3>
                                <nav role="navigation">
                                    <ul>
                                        <li>
                                            <a href="/214/page1">
                                                Next Designs <span className="indicator">&rsaquo;</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.mezzoblue.com/zengarden/alldesigns/"
                                               title="View every submission to the Zen Garden.">
                                                View All Designs </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className={style.zenResources}>
                                <h3>Resources:</h3>
                                <ul>
                                    <li>
                                        <a href="style.css"
                                           title="View the source CSS file of the currently-viewed design.">
                                            View This Design&#8217;s <abbr title="Cascading Style Sheets">CSS</abbr>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.mezzoblue.com/zengarden/resources/"
                                           title="Links to great sites with information on using CSS.">
                                            <abbr title="Cascading Style Sheets">CSS</abbr> Resources </a>
                                    </li>
                                    <li>
                                        <a href="http://www.mezzoblue.com/zengarden/faq/"
                                           title="A list of Frequently Asked Questions about the Zen Garden.">
                                            <abbr title="Frequently Asked Questions">FAQ</abbr> </a>
                                    </li>
                                    <li>
                                        <a href="http://www.mezzoblue.com/zengarden/submit/"
                                           title="Send in your own CSS file.">
                                            Submit a Design </a>
                                    </li>
                                    <li>
                                        <a href="http://www.mezzoblue.com/zengarden/translations/"
                                           title="View translated versions of this page.">
                                            Translations </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <footer className={style.footer}>
                        <a href="http://validator.w3.org/check/referer"
                           title="Check the validity of this site’s HTML" className="zen-validate-html">HTML</a>
                        <a href="http://jigsaw.w3.org/css-validator/check/referer"
                           title="Check the validity of this site’s CSS" className="zen-validate-css">CSS</a>
                        <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/"
                           title="View the Creative Commons license of this site: Attribution-NonCommercial-ShareAlike."
                           className="zen-license">CC</a>
                        <a href="http://mezzoblue.com/zengarden/faq/#aaa"
                           title="Read about the accessibility of this site" className="zen-accessibility">A11y</a>
                        <a href="https://github.com/mezzoblue/csszengarden.com" title="Fork this site on Github"
                           className="zen-github">GH</a>
                    </footer>
                </div>
            </div>
        )
    }
}