import { Injectable }       from '@angular/core';
import {BlogPost}                                  from '../app/models/blog-post';
import {addOrReplaceByProp, removeFromArrayByProp} from '../app/utilities.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private dummyData: BlogPost[] = [
    {
      title: 'The Neelkantha Trek',
    body: this.sanitizer.bypassSecurityTrustHtml( '<p> Neelkhant Mahadev</p>When you are completely locked down for 4 months, it is super difficult to hold on to your grounds. What’s more difficult is making yourself understand that in this pandemic it might be unwise to be a traveller. Yet after keeping high safety grounds me and my friend went on a journey which was way too more important than just a trip. <br>  Due to my hectic work schedule and closed out spirit due to the lockdown my body had a breakdown. I was diagnosed with migraine and severe neck ache. I was under heavy medications yet it took 3 months to just lower the pain. I understood that I need a break, only that way I can relish my health. For that my clear destination where I can enter in this lockdown was my state Uttarakhand. So, as a result, I took my UA 04 number car to a state now considered as the UK (from Uttaranchal to Uttarakhand). Also, using my gov tag as a research scholar of IIT Delhi I was confident that I can make inside the “Chakravu” of Uttarakhand Police.<br>  Everyone told me not to make such stupid move as no one is allowing to travel interstate. While I was confident that I could make it. I also contacted my friend who was staying at Garhwal University, Srinagar to help me get in. As a result, I made it in after a few hiccups and car breakdowns (even the car was having the lockdown blues). The roads were all broken down due to the landslides, and it was a super hectic and risky ride but finally; I made it. <br>I reached Chauras, a small town in Srinagar, Garhwal at 2:30 am which is not at all a safe time to reach anywhere in the mountains due to wild animals. Next day was super amazing. I was still not well, but my journey to regain my health has just started. My fellow friend was also a research scholar, so I was openly welcomed at his university to visit and work. Thanks to lockdown and my university’s respectable name I was now working at the Geology department of Srinagar University.  It was a beautiful campus in the lap of Himalayas and river Alaknanda. I was still having my medicines and was keeping myself safe.<br><br>.<br> <span><img class="demo" style="max-width: -webkit-fill-available;" src="../assets/img/blogOne/hnbgu.jpg"></span>.<br>.<br> After a few days of slowly getting accustomed to the environment, I decided to now slowly start walking and started working out on my health by doing Yoga. And slowly I was catching up on my health. Soon I went for a 4 km walk, then 7, 8 and finally 24. I thought I am all good and now I can return to my workplace. However, One day my health hit rock bottom again and now I saw my relationship with rest and bed getting stronger.<br>I was under medications, again I knew what I needed to do. This time I wanted to test myself to the higher limits. So I called my friend from Delhi to join me in and the next expedition that could make me feel fit. He was scared to make a move due to the state lockdown, however, my connections made his entry smooth, and he was here.<br>So we decided to now go for Badrinath-Hemkundsahid-Kedarnath. We were supposed to complete it within 6 days as he was could not take longer leaves. We maintained a balance between the work and our travel and somehow manage the both. I was all pumped up and was ready to go. So we started our journey from Srinagar and took our first stop at the “dhari devi” a temple located on the banks of the Alaknanda River between Srinagar and Rudraprayag in the Garhwal Region of Uttarakhand, India. This temple is considered as one of the biggest reason for the Uttarakhand flood in 2013. When the original temple of the goddess was removed and shifted to the concrete platform at a height of about 611 metres from the Alaknanda river, to give way to the construction of the 330 MW Alaknanda Hydro-Electric Dam built by Alaknanda Hydro Power Company Ltd (AHPCL). Soon after this move, Uttarakhand faced one of the biggest natural disasters after the Tsunami in 2004. Locals recommend every traveller to pay their respect to this temple for the successful journey.<br>We sailed our way and reached Rudraprayag being super spontaneous as we initially decided to do Kedarnath first then Badrinath but we changed the decision and did the opposite. As a result, we reached Badrinath the same day. The roads were broken. And we were also made cautious to keep the windows of our car up due to frequent spotting of the wild animals. We finally reached Badrinath but could not get a place to close the night so decided to sleep in the car. It was a cold night, the temperature dropped to subzero, and we were not prepared for the sudden drop. Next day we got a place to stay and the bright shining sun after a super cold night was comforting.<br>We took two beds at the shared dorms of Uttarakhand Dormitory at Badrinath, luckily due to the pandemic we had it all for us. While we were moving our things from the car to the dorm, I saw a traveller packing his old Royal Enfield bike ready to leave the place. I took a moment to share some words with him and realised he was travelling solo for more than a month in India. He was a Canadian traveller, and he asked me to go for a small untouched trek for Neelkanth mountain just behind the temple. I offered him if any sort of help is required but he looked like he was well prepared to survive anything on his own. I kept a note on the words he said and gave him a goodbye.<br><br><br><span><img  class="demo" style="max-width: -webkit-fill-available;" src="../assets/img/blogOne/yatri.jpg"></span>.<br>.<br> That day we just took a good warm sleep after the cold night. At the dawn we travelled around the city to gaze at what we have. As we were carrying our own cooking gears we prepared the dinner and got ready for the next day. In the morning while my friend who could not escape the work stayed back, I on the other hand decided to leave for the Neelkanth trek. <br>From the dorm it was around 13 kms up and down. I left at 10; it was a warm day with good sun shining bright but at such altitude weather can play its tricks and change anytime. I was still struggling with my health with a blurred vision from my left eye but I left, anyway. Like always, I started slow by taking baby steps making myself accustomed to the environment and then gathered a bit of strength to keep up my pace. The scenic beauty was mesmerizing. The more I was pushing myself the more nature was rewarding me. I was slowly getting out of reach from the humanity and I was losing out my signals more often. The escape was amazing and exhilarating. I could now see the out-pour of several water streams. Finally, the pavements were no more, and it was all me with the panoramic view and nature.<br>The temperature was dropping at higher rates with every step I was taking. Now I could see multiple streams of river to cross, a lot of boulders and inclined mountains. My eyes were stuck at one place which was like an enormous leap. I was not knowing why but I was just too eager to reach and cross that place. I kept on pushing myself by saying just one step, just the last one. I was right, as soon as I stepped on that and crossed it the view was phantasmagorical, suddenly I have stepped into a different world. I have been on several expeditions but have seen nothing like this. One side of it was lush green vegetation with multiple glacier water streams full of life. On the other, it was steep lifeless rocky mountains with huge fountain streams. At front it was the snow glacier and the Neelkanth Peak while at the back it was another peak. While looking back it was as if I could jump and reach the peaks easily. I could see multiple small ponds with clear transparent water, some of them so reflective like a mirror with a shiny sky clearly visible. The rocks and ecology was so perfectly aligned as if it had remained untouched for years. We can easily sit and transcend into multiple lives thinking how far we have made. Suddenly the big hustle voices of water streams also turned down and were replaced by a silent buzzing melodious voice of the wind. All the colors were so shiny that it can easily confuse anyone as if they were photoshopped for real.<br><br> <span><img class="demo" style="max-width: -webkit-fill-available;" src="../assets/img/blogOne/cropp.png"></span>    <br><br>I kept ongoing up. I could really feel the change in the flora and fauna at every step. At one step I was getting amazed by a sudden small patch filled with daffodillies while at another a fern-like plant, another like a miniature version of huge plants-Like a bonsai. Even though the path got tougher, now I need to make my way between the streams, easily confusing me. It was so beautiful and mesmerizing that one can easily get lost into the beauty than keeping a check on the path. It was getting harder for me to keep myself contained and not get lost into the detailing. My mind suddenly started to wander everywhere, tempting to explore all the places making it hard to reach the goal. And just like that I had an “AhhA" moment for the first time I was now feeling so relaxed at the place where I am. I used to travel hard, summit places, sleep on the frozen rivers, survive the harshest weather as an aim to tick off my to-do list. Like a checklist of my personal accomplishments making me feel good about myself. Like always I set up a similar goal for this trek to go to not stop till I wont reach the glacier. But this time I was alone and had no one with me to remind me of my task list. This time it was all me and my health. And for the first time I stopped. I took a sigh and caught myself really living the moment as if this is it, I wanted to save this memory forever. I wanted to just stay. It was not an escape for me, it was the reality. That spiritual moment I guess would be so common for most solo travelers that makes them addicted to it. On the other side I decided to go further as near as I can get. This time I saw myself jumping on the big boulders and rocks. I was shocked at one moment I was struggling to get out of my room and now I was jumping off the huge rocks which came down from above. I was amazed how nature has perfectly aligned itself with these dreadful rocks placed perfectly as If they were hand picked and placed. I could see small plantations and algae making these lifeless rocks look so beautiful that sometimes I was feeling guilty by stepping on them. It was an amazing amalgamation of yellow, dark green, neon green, brown and multiple shades of grey. After a few moments when my heart filled itself with clean soothing air and sparkling sweat filled my body. I decided to hold and just relax and give my body a treat of rest. I did it and I reached not where I wanted but where I was destined. I was surrounded by 3 glaciers and this was more exhilarating than the one I wanted. I could clearly see the confluence of waterfalls and their origin(the glacier). I could feel the power of mother nature. The setup was equally dangerous by the roar of these waterfalls and harsh weather and comforting by the presence of lush green nature and silent water ponds. <br> <br><br><span><img  class="demo" style="max-width: -webkit-fill-available;" src="../assets/img/blogOne/view.jpg"></span>.<br>.<br> For the first time I was not feeling any guilt or sadness for not achieving my goal to reach to the end but happy that I did it. And the best part was I heard myself taking and patting my back for just being into the moment not in the past or future, just being here, which is rare. I realised how it is to be in the lap of nature. This place was one of a kind. Which suddenly breaks you from the world and brings to another world.<br>Going back was not easy. My heart was melting down at every step that I was taking. I was continuously looking back. Like a child I was pleading my inner self to stop and just look. It was an emotional moment of departure for me. Even though I just came up suddenly while going back I lost my track. Suddenly, there were so many new streams of water and for the first time I did not keep any markers in my brain to remember the path. On the contrary, instead of being scared of getting lost and not making out in time I was happy. As now I was actually going to the places where I wanted to go while coming up rejecting that as risky or tedious. I was surprised by the way that I do not remember a thing as if it"s a completely new terrain!. Yet exciting, I was wearing my sports shoes which were not at all made for these terrains. The water streams were getting bigger and bigger and I was supposed to not waste time anymore as it started to rain at the top. Every step of mine was making this journey shorter and giving me a realization of my worldly presence coming close to me. As soon as I came into the range of my cell phone, my phone started ringing and I was caught up by my colleagues to attend the meetings I was supposed to be in. I gave my presence but this time with the smile on my face remembering how petty these worldly matters are and how incorrectly I was taking them. Giving them a place in our mind which it dont deserve. This time not being anxious of the outcome of the meeting I just used the similar mindset of just being present in it. I realised how easy it was for me to be in there. After my meeting got over I descended back giving the last glance to mother nature. Thanking to make me realise so many things and finally giving me a way to live. I was finally thinking like a monk but living like a Professional. <br><br> <p>The Neelkanth Peak.<br><br><span><img  class="demo" style="max-width: -webkit-fill-available;" src="../assets/img/blogOne/neelkantha.jpg"></span>'),
      isPublished: true,
    updatedOn: null,
      createdOn: null,
      uid: '1',
      image:"../assets/img/blogOne/neelkantha.jpg",
      authorImage:"../assets/img/faces/parth.jpeg",
      authorName:"Parth",
      authorTitle:"Blogger"

    },
    {
      title: 'When it was all me',
    body: this.sanitizer.bypassSecurityTrustHtml( 'I\'m baby 90\'s af DIY vexillologist meggings, mixtape asymmetrical cray single-origin coffee church-key tattooed cardigan live-edge. Locavore kitsch adaptogen tacos organic coloring book, af beard tumeric tofu tote bag austin fingerstache paleo echo park. Vegan post-ironic next level jean shorts, chicharrones shabby chic hexagon XOXO helvetica pabst tattooed ethical. Cred you probably haven\'t heard of them sartorial slow-carb wayfarers.'),
      isPublished: true,
    updatedOn: null,
      createdOn: null,
      uid: '2',
      image:"../assets/img/leh.jpg",
      authorImage:"../assets/img/faces/parth.jpeg",
      authorName:"Parth",
      authorTitle:"Blogger"
    },
    {
      title: 'Blog Post #3',
    body: this.sanitizer.bypassSecurityTrustHtml( 'I\'m baby 90\'s af DIY vexillologist meggings, mixtape asymmetrical cray single-origin coffee church-key tattooed cardigan live-edge. Locavore kitsch adaptogen tacos organic coloring book, af beard tumeric tofu tote bag austin fingerstache paleo echo park. Vegan post-ironic next level jean shorts, chicharrones shabby chic hexagon XOXO helvetica pabst tattooed ethical. Cred you probably haven\'t heard of them sartorial slow-carb wayfarers.'),
      isPublished: true,
    updatedOn: null,
      createdOn: null,
      uid: '3',
      image:"../assets/img/leh.jpg",
      authorImage:"../assets/img/faces/parth.jpeg",
      authorName:"Parth",
      authorTitle:"Blogger"
    },
    {
      title: 'Blog Post #4',
    body: this.sanitizer.bypassSecurityTrustHtml( 'I\'m baby 90\'s af DIY vexillologist meggings, mixtape asymmetrical cray single-origin coffee church-key tattooed cardigan live-edge. Locavore kitsch adaptogen tacos organic coloring book, af beard tumeric tofu tote bag austin fingerstache paleo echo park. Vegan post-ironic next level jean shorts, chicharrones shabby chic hexagon XOXO helvetica pabst tattooed ethical. Cred you probably haven\'t heard of them sartorial slow-carb wayfarers.'),
      isPublished: true,
    updatedOn: null,
      createdOn: null,
      uid: '4',
      image:"../assets/img/leh.jpg",
      authorImage:"../assets/img/faces/parth.jpeg",
      authorName:"Parth",
      authorTitle:"Blogger"
    }
  ];

  constructor(private firestore: AngularFirestore, private sanitizer: DomSanitizer) { }
  getPolicies() {
    return this.firestore.collection('policies').snapshotChanges();
    
}
  getPosts(): BlogPost[] {
    console.log('returning all dummy data', this.dummyData);
    return this.dummyData;
  }

  getPost = (uid: string): BlogPost => {
    console.log('returning dummy data', this.dummyData.find(data => data.uid === uid) );
    return this.dummyData.find(data => data.uid === uid);
  };

  /**
   * Adds a post if it isn't in the list
   * Updates a post if it is in the list
   * @param post
   */
  updatePost(post: BlogPost) {
    this.dummyData = addOrReplaceByProp(this.dummyData, 'uid', post.uid, post);
  }

  deletePost(post: BlogPost) {
    this.dummyData = removeFromArrayByProp(this.dummyData, 'uid', post.uid);
  }
}
