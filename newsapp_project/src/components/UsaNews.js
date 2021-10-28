import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {"source":{"id":"nbc-news","name":"NBC News"},"author":"Elisha Fieldstadt","title":"Student dead, others injured after drive-by shooting at Kentucky school bus stop - NBC News","description":"Two teens were shot, one fatally, while waiting for their school bus in Louisville, Kentucky, Wednesday morning, police said.","url":"https://www.nbcnews.com/news/us-news/student-dead-others-injured-after-drive-shooting-kentucky-school-bus-n1279826","urlToImage":"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_38/3507530/210922-louisville-shooting-jm-0923.jpg","publishedAt":"2021-09-22T16:06:00Z","content":"Two Kentucky teenagers were shot, one fatally, while waiting Wednesday morning for their school bus, police said.\r\nThe students were on a corner in the Russell neighborhood of Louisville around 6:30 … [+1270 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":"Kevin Liptak, CNN","title":"Biden set to hold high-stakes call with Macron amid diplomatic crisis - CNN","description":"President Joe Biden spoke for the first time Wednesday with French President Emmanuel Macron after a major diplomatic crisis exploded between the two longtime allies over a deal to equip Australia with nuclear-powered submarines.","url":"https://www.cnn.com/2021/09/22/politics/macron-biden-call/index.html","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/210613200451-biden-macron-g7-2021-super-tease.jpg","publishedAt":"2021-09-22T15:30:00Z","content":"(CNN)President Joe Biden spoke for the first time Wednesday with French President Emmanuel Macron after a major diplomatic crisis exploded between the two longtime allies over a deal to equip Austral… [+7563 chars]"},{"source":{"id":null,"name":"NBCSports.com"},"author":"Michael David Smith","title":"Tua Tagovailoa out this week, Jacoby Brissett starts for Dolphins vs. Raiders - NBC Sports","description":"Dolphins quarterback Tua Tagovailoa will miss at least one game after suffering fractured ribs on Sunday. Coach Brian Flores confirmed today that Tagovailoa is out Sunday against the Raiders. Jacoby Brissett will start. Tagovailoa suffered the injury in last …","url":"https://profootballtalk.nbcsports.com/2021/09/22/tua-tagovailoa-out-this-week-jacoby-brissett-starts-for-dolphins-vs-raiders/","urlToImage":"https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2021/09/GettyImages-1341536432-e1632324106171.jpg","publishedAt":"2021-09-22T15:21:00Z","content":"godkingskovald says:September 22, 2021 at 12:11 pm\r\nTua looked a free defender in the eye and went back to his reads like he didnt even see him and got crushed. He just doesnt have it yet.___________… [+623 chars]"},{"source":{"id":"the-verge","name":"The Verge"},"author":"Monica Chin","title":"Microsoft Surface Go 3 gets new Intel processors (and that’s about it) - The Verge","description":"The third generation of Microsoft’s Surface Go convertible is almost identical to its predecessor. It’s a bit lighter, runs Windows 11, and has upgraded Intel processors, making for a slightly more powerful device for on-the-go use.","url":"https://www.theverge.com/2021/9/22/22684608/microsoft-surface-go-3-processor-specs-price-features","urlToImage":"https://cdn.vox-cdn.com/thumbor/KOCyfAhQN5N2xoaHoTa4zUYR5XQ=/0x481:6720x3999/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22869947/Surface_Go_3___Creating_under_embargo_until_September_22.jpg","publishedAt":"2021-09-22T15:15:05Z","content":"Looks a lot like the Surface Go 2\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nImage: Microsoft\r\nMicrosofts Surface Go 2 is one of the best che… [+1177 chars]"},{"source":{"id":null,"name":"Gizmodo.com"},"author":"Whitney Kimball","title":"Facebook Paid the FTC Billions to Personally Protect Zuckerberg, Lawsuit Claims - Gizmodo","description":"Building on years of litigation, a shareholders' suit claims that the $5 billion 2019 FTC settlement could have been a horse trade.","url":"https://gizmodo.com/facebook-paid-the-ftc-billions-to-personally-protect-zu-1847719765","urlToImage":"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3c8a47dae072afea9be7db32bb394192.jpg","publishedAt":"2021-09-22T15:10:00Z","content":"A hulking lawsuit made public this week accuses Facebooks board of agreeing to overpay the Federal Trade Commission billions of dollars in exchange for not personally suing CEO Mark Zuckerberg over t… [+8303 chars]"},{"source":{"id":null,"name":"Sports Illustrated"},"author":"Michael Fabiano","title":"Start 'Em, Sit 'Em Fantasy Football Week 3: Quarterbacks - Fades, Sleepers, Matchups, DFS Bargains - Sports Illustrated","description":"Justin Herbert headlines as the quarterback start 'em of the week against a poor-performing Chiefs defense","url":"https://www.si.com/fantasy/2021/09/22/start-em-sit-em-week-3-quarterbacks","urlToImage":"https://www.si.com/.image/t_share/MTg0MDUwNjA0OTM3NTg2Mzc3/si_startsit_092221_qb.jpg","publishedAt":"2021-09-22T15:03:25Z","content":"Start ‘Em, Sit 'Em is the ultimate look at the best and worst matchups based on a PPR scoring system in fantasy football. This column will not cover the elite players in the NFL like Patrick Mahomes,… [+6034 chars]"},{"source":{"id":null,"name":"NPR"},"author":"Deepa Shivaram","title":"Florida Gov. DeSantis Taps A New Surgeon General Who Doesn't Support Vaccine Mandates - NPR","description":"Dr. Joseph Ladapo comes to Florida from UCLA and is a Harvard Medical School graduate. He says vaccines are not the only way to promote \"good health\" and the decision to get one is up to each person.","url":"https://www.npr.org/2021/09/22/1039613351/desantis-florida-surgeon-general-vaccine-mandates","urlToImage":"https://media.npr.org/assets/img/2021/09/22/gettyimages-1333403997_wide-4df96b80cd31d705fbf4be90bef83ba7843564e0.jpg?s=1400","publishedAt":"2021-09-22T15:02:25Z","content":"Florida Gov. Ron DeSantis (shown here in August) has appointed a new surgeon general who does not believe in vaccine mandates.\r\nJoe Raedle/Getty Images\r\nFlorida Gov. Ron DeSantis has announced the st… [+1660 chars]"},{"source":{"id":null,"name":"BuzzFeed News"},"author":"Ellen Durney","title":"\"Sex And The City\" Stars Including Kim Cattrall And Kristin Davis Have Shared Moving Tributes To Willie Garson After He Died Months After The Reboot Began Production - BuzzFeed News","description":"Willie Garson was best known for his role as the beloved Stanford Blatch, Carrie Bradshaw’s best friend, on Sex And The City.","url":"https://www.buzzfeednews.com/article/ellendurney/sex-and-the-city-cast-tributes-to-willie-garson-after-death","urlToImage":"https://img.buzzfeed.com/buzzfeed-static/static/2021-09/22/14/enhanced/d1d502a93866/original-405-1632321866-17.jpg?crop=1581:830;0,0","publishedAt":"2021-09-22T14:50:00Z","content":null},{"source":{"id":null,"name":"Detroit Free Press"},"author":"Dave Birkett, Detroit Free Press","title":"Detroit Lions place CB Ifeatu Melifonwu on IR, sign Daryl Worley off practice squad - Detroit Free Press","description":"With 54 starts in his five-year career, Worley is the most experienced cornerback on the Lions' 53-man roster","url":"https://www.freep.com/story/sports/nfl/lions/2021/09/22/detroit-lions-place-cb-ifeatu-melifonwu-ir-sign-daryl-worley/5812201001/","urlToImage":"https://www.gannett-cdn.com/presto/2021/09/21/PDTF/92be7124-9229-4f38-b715-eb816db943a3-GTY_1341579153.jpg?auto=webp&crop=1516,853,x0,y180&format=pjpg&width=1200","publishedAt":"2021-09-22T14:49:31Z","content":"For the second straight week, the Detroit Lions have placed a starting cornerback on injured reserve.\r\nThe Lions moved rookie third-round pick Ifeatu Melifonwu to IR Wednesday and signed Daryl Worley… [+1822 chars]"},{"source":{"id":null,"name":"Yahoo Entertainment"},"author":"Aaron Royce","title":"Vanessa Hudgens Laces Up in Wrapped Lingerie & Pointed-Toe Pumps for Savage X Fenty Show - Yahoo Lifestyle","description":"The actress showed off a whole new side to her style for the show.","url":"https://www.yahoo.com/lifestyle/vanessa-hudgens-laces-wrapped-lingerie-144228179.html","urlToImage":"https://s.yimg.com/uu/api/res/1.2/N3UGnRWX26a_DTYN6ieaRg--~B/aD02ODM7dz0xMDI0O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/footwear_news_642/3ac840b1de3579576b86f5c23925cd9a","publishedAt":"2021-09-22T14:42:28Z","content":"Vanessa Hudgens stepped out in a daring ensemble for Rihannas Savage X Fenty, Vol. 3 runway show, premiering on Sept. 24 on Amazon Prime.\r\nThe My Little Pony: A New Generation actress went bold in wh… [+2479 chars]"},{"source":{"id":"the-washington-post","name":"The Washington Post"},"author":"Timothy Bella, Kim Bellware","title":"Gabby Petito death: FBI searches for Brian Laundrie in Florida after autopsy shows homicide - The Washington Post","description":"The FBI is asking people to come forward with information regarding the whereabouts of Brian Laundrie, 23, who returned from a cross-country van trip without Gabby Petito, 22, three weeks ago.","url":"https://www.washingtonpost.com/nation/2021/09/22/gabby-petito-death-laundrie-search/","urlToImage":"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HLUXKOA3GQI6ZPVIGCHKCNCZJ4.jpg&w=1440","publishedAt":"2021-09-22T14:06:49Z","content":"Teton County Coroner Brent Blue confirmed Tuesday that the human remains found in a Wyoming national forest Sunday were those of Petito. The official cause of death remains pending until the final au… [+6491 chars]"},{"source":{"id":null,"name":"SciTechDaily"},"author":null,"title":"Astronomers Have Discovered a Gigantic Sphere-Shaped Cavity in Space - SciTechDaily","description":"Gigantic cavity in space sheds new light on how stars form. Astronomers analyzing 3D maps of the shapes and sizes of nearby molecular clouds have discovered a gigantic cavity in space. The sphere-shaped void, described today in the Astrophysical Journal Lette…","url":"https://scitechdaily.com/astronomers-have-discovered-a-gigantic-sphere-shaped-cavity-in-space/","urlToImage":"https://scitechdaily.com/images/Perseus-Taurus-Supershell.gif","publishedAt":"2021-09-22T13:43:21Z","content":"ByHarvard-Smithsonian Center for Astrophysics,September 22, 2021\r\nAstronomers have discovered a giant, spherical cavity within the Milky Way galaxy; its location is depicted on the right. A zoomed in… [+6772 chars]"},{"source":{"id":null,"name":"Vox"},"author":"Brian Resnick","title":"The Webb Space Telescope is 100x as powerful as the Hubble. It will change astronomy. - Vox.com","description":"The launch date of NASA’s Webb Space Telescope is December 18. It will study exoplanets, the Big Bang, and more.","url":"https://www.vox.com/science-and-health/22664709/james-webb-space-telescope-launch-date-december-science-hubble","urlToImage":"https://cdn.vox-cdn.com/thumbor/cmIgwJAHsUC7EUU6m9M3iR_GTXY=/0x110:3300x1838/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22863764/33433274343_277deba9eb_o.jpg","publishedAt":"2021-09-22T13:30:00Z","content":"Exploring strange new worlds. Understanding the origins of the universe. Searching for life in the galaxy. These are not the plot of a new science fiction movie, but the mission objectives of the Jam… [+15910 chars]"},{"source":{"id":null,"name":"CNBC"},"author":"Michael Sheetz","title":"SpaceX research, with Elon Musk as an author, details Covid protections for first astronaut launch - CNBC","description":"SpaceX launched people to space for the first time in May 2020, a few months after the Covid pandemic began to spread across the United States.","url":"https://www.cnbc.com/2021/09/22/spacex-covid-19-research-elon-musk-author-first-astronaut-launch.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/106551943-15904985982020-05-24t000000z_782673459_rc23vg97gzxj_rtrmadp_0_space-exploration-spacex-launch.jpeg?v=1590498663","publishedAt":"2021-09-22T13:26:48Z","content":"NASA astronaut Douglas Hurley rehearses putting on his SpaceX spacesuit in the Astronaut Crew Quarters inside the Neil A. Armstrong Operations and Checkout Building at the Kennedy Space Center ahead … [+4352 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":"Priscilla Alvarez and Rosa Flores, CNN","title":"DHS releasing some Haitians into US despite claims they would be immediately expelled - CNN","description":"The Department of Homeland Security is releasing some Haitians into the United States, despite repeated claims that they would be immediately expelled from the US, as the Biden administration scrambles to address the massive migrant encampment under the Del R…","url":"https://www.cnn.com/2021/09/22/politics/border-texas-haitians/index.html","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/210922075510-01-mexico-us-border-haiti-camp-092121-file-super-tease.jpg","publishedAt":"2021-09-22T13:18:00Z","content":"(CNN)The Department of Homeland Security is releasing some Haitians into the United States, despite repeated claims that they would be immediately expelled from the US, as the Biden administration sc… [+3081 chars]"},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"iPad Mini and 9th Gen iPad, reviewed - CNET","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9SmRLbG5RWlhzaXfSAQA?oc=5","urlToImage":null,"publishedAt":"2021-09-22T13:00:18Z","content":null},{"source":{"id":"fox-news","name":"Fox News"},"author":"Fox News Staff","title":"Nigel Farage on Biden's 'utterly bizarre' meeting with Boris Johnson: Is he actually 'fit' for office? - Fox News","description":"Former Brexit Party Leader wonders if Joe Biden is fit to be president of the United States if he won't take questions from reporters.","url":"https://www.foxnews.com/media/farage-biden-boris-johnson-meeting-dodging-questions-unfit-for-office","urlToImage":"https://static.foxnews.com/foxnews.com/content/uploads/2021/09/Nigel-Farage-Biden-.jpg","publishedAt":"2021-09-22T12:48:55Z","content":"Former Brexit Party Leader Nigel Farage told \"Fox &amp; Friends First\" Wednesday that some in Britain are asking if Joe Biden is fit to be in office. Farage argued when Biden \"doesnt take questions f… [+1496 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Express Web Desk","title":"Explained: Jagmeet Singh, the leader of NDP who holds key to Trudeau’s govt - The Indian Express","description":"The left-wing NDP, led by Jagmeet Singh, has said that the party would stand by Trudeau's government on several social and environmental issues, but would keep pushing the government on progressive issues, including student-loan debt forgiveness and climate c…","url":"https://indianexpress.com/article/explained/jagmeet-singh-canada-elections-2021-7527300/","urlToImage":"https://images.indianexpress.com/2021/09/Jagmeet-Singh-explained.jpg","publishedAt":"2021-09-22T12:32:55Z","content":"As result of Canada elections were declared, Indian-origin leader Jagmeet Singh has once again emerged as the kingmaker for Prime Minister Justin Trudeaus Liberal Party.While Trudeau won the general … [+4756 chars]"},{"source":{"id":null,"name":"Internet"},"author":"https://www.facebook.com/thehackernews","title":"Microsoft Warns of a Wide-Scale Phishing-as-a-Service Operation - Internet","description":"Microsoft is warning the public of a massive phishing-as-a-Service operation, called BulletProofLink.","url":"https://thehackernews.com/2021/09/microsoft-warns-of-wide-scale-phishing.html","urlToImage":"https://thehackernews.com/images/-7sP_5wT2ZGQ/YUsf9nQFMGI/AAAAAAAAD3Y/Zsd1Y_6jvToViy5t1ljsLexnHNbq2xOxgCLcBGAsYHQ/s0/phishing.jpg","publishedAt":"2021-09-22T12:25:00Z","content":"Microsoft has opened the lid on a large-scale phishing-as-a-service (PHaaS) operation that's involved in selling phishing kits and email templates as well as providing hosting and automated services … [+2652 chars]"},{"source":{"id":"cbs-news","name":"CBS News"},"author":null,"title":"Gas station clerk murdered for asking a customer to wear a mask - CBS News","description":"One German politician warned of \"an inconceivable level of radicalization,\" saying the worker was killed for simply pointing out a nationwide rule.","url":"https://www.cbsnews.com/news/covid-germany-mask-murder-gas-station-attendant/","urlToImage":"https://cbsnews2.cbsistatic.com/hub/i/r/2021/09/21/bb565088-c2f7-449a-b02f-0686a3b2ddfa/thumbnail/1200x630/108ad30401bbd8d2e526ef895c1ea5bd/germany-mask-murder-1235399530.jpg","publishedAt":"2021-09-22T11:57:11Z","content":"Berlin — Senior politicians in Germany expressed shock over the weekend killing of a young gas station clerk who asked a customer to wear a face mask, and they warned Tuesday against the radicalizati… [+2825 chars]"}
    ]
    constructor(){
        super();
        console.log("Hello, I am a constructor");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className="my-3">USA News - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-3" key={element.title}>
                            <NewsItem title={element.title!=null?element.title.slice(0,40):element.title} description={element.description!=null?element.description.slice(0,60):element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News