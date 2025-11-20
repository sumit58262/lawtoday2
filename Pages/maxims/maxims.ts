import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { ExamNotificationDetailPage } from "../exam-notification-detail/exam-notification-detail";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-maxims',
  templateUrl: 'maxims.html',
})
export class MaximsPage {
    misc: string ;
    misc1: any ;
    maxims:any;
   states:any; 
  
   
  constructor(
    public navParams: NavParams,
      public navCtrl: NavController,
      private iab: InAppBrowser
      ) {
    this.misc1 = navParams.get("data") ? navParams.get("data") : "";
    this.misc = this.misc1.title;
   // console.log(this.misc)
    this.initializemaxims();
    this.initializestate();
    
  }


  goToExamDetail(val) {
    this.navCtrl.push(ExamNotificationDetailPage, { data: val });
  }


  initializestate(){
    this.states = [

        {
            "img": "assam-min.png",
            "title": "Assam Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/assam.pdf"
        },
        {
            "img": "bihar-min.png",
            "title": "Bihar Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/bihar.pdf"
        },
        {
            "img": "chhattisgarh-min.png",
            "title": "Chhattisgarh Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/chhattisgarh.pdf"
        },
        {
            "img": "delhi-min.png",
            "title": "Delhi Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/delhi.pdf"
           
        },
		 {
            "img": "gujarat-min.png",
            "title": "Gujarat Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/gujarat.pdf"
           
        },
		 {
            "img": "haryana-min.png",
            "title": "Haryana Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/haryana.pdf"
           
        },
		 {
            "img": "hp-min.png",
            "title": "Himachal Pradesh Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/hp.pdf"
           
        },
		 {
            "img": "jharkhand-min.png",
            "title": "Jharkhand Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/jharkhand.pdf"
           
        },
		 {
            "img": "kerala-min.png",
            "title": "Kerala Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/kerala.pdf"
           
        },
		 {
            "img": "maharashtra-min.png",
            "title": "Maharashtra Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/maharashtra.pdf"
           
        },
		 {
            "img": "manipur-min.png",
            "title": "Manipur Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/manipur.pdf"
           
        },
		 {
            "img": "mp-min.png",
            "title": "Madhya Pradesh Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/mp.pdf"
           
        },
		 {
            "img": "orissa-min.png",
            "title": "Orissa Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/orissa.pdf"
           
        },
		 {
            "img": "punjab-min.png",
            "title": "Punjab Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/punjab.pdf"
           
        },
		 {
            "img": "rajasthan-min.png",
            "title": "Rajasthan Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/rajasthan.pdf"
           
        },
		 {
            "img": "tamilnadu-min.png",
            "title": "Tamil Nadu Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/tamilnadu.pdf"
           
        },
		 {
            "img": "up-min.png",
            "title": "Uttar Pradesh Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/up.pdf"
           
        },
		 {
            "img": "uttarakhand-min.png",
            "title": "Uttarakhand Syllabus",
            "pdf": "https://lawtoday.co.in/assets/syllabus/uttarakhand.pdf"
           
        }
		

    ];
  }

  initializemaxims() {
    this.maxims = [
        {
          "img": "1.png",
          "title": "(In) Arguendo",
          "content": "For The Sake Of Argument."
      },
      {
          "img": "2.png",
          "title": "A Fortiori",
          "content": "From Stronger. An A Fortiori Argument Is An 'Argument From A Stronger Reason, Meaning That, Because One Fact Is True, A Second (Related And Included) Fact Must Also Be True."
      },
      {
          "img": "3.png",
          "title": "A Mensa Et Thoro",
          "content": "From Table And Bed. Divorce A Mensa Et Thoro Indicates Legal Separation Without Legal Divorce."
      },
      {
          "img": "4.png",
          "title": "A Posteriori",
          "content": "From Later. An Argument Derived From Subsequent Event."
      },
      {
          "img": "5.png",
          "title": "A Priori",
          "content": "From Earlier. An Argument Derived From Previous Event."
      },
      {
          "img": "6.png",
          "title": "A Quo",
          "content": "From Which. Regarding A Court Below In An Appeal, Either A Court Of First Instance Or An Appellate Court, Known As The Court A Quo."
      },
      {
          "img": "7.png",
          "title": "A Vinculo Matrimonii ",
          "content": "From The Bond Of Matrimony."
      },
      {
          "img": "8.png",
          "title": "Ab Extra",
          "content": "From Outside. Concerning A Case, A Person May Have Received Some Funding From A 3Rd Party. This Funding May Have Been Considered Ab Extra."
      },
      {
          "img": "1.png",
          "title": "Ab Initio",
          "content": "From The Beginning. Commonly Used Referring To The Time A Contract, Statute, Marriage, Or Deed Become Legal. E.G The Couple Was Covered Ab Initio By Her Health Policy."
      },
      {
          "img": "2.png",
          "title": "Ab Initio ",
          "content": "From The Beginning."
      },
      {
          "img": "3.png",
          "title": "Absoluta Sententia Expositore Non Indiget ",
          "content": "An Absolute Judgment Needs No Expositor."
      },
      {
          "img": "4.png",
          "title": "Absque Hoc",
          "content": "Without This. Presenting The Negative Portion Of A Plea When Pleading At Common By Way A Special Traverse."
      },
      {
          "img": "5.png",
          "title": "Abundans Cautela Non Nocet ",
          "content": "Abundant Caution Does No Harm."
      },
      {
          "img": "6.png",
          "title": "Accessorium Non Ducit Sed Sequitur Suum Principale ",
          "content": "An Accessory Does Not Draw, But Follows Its Principal."
      },
      {
          "img": "7.png",
          "title": "Accessorius Sequitur ",
          "content": "One Who Is An Accessory To The Crime Cannot Be Guilty Of A More Serious Crime Than The Principal Offender."
      },
      {
          "img": "8.png",
          "title": "Acta Exteriora Iudicant Interiora Secreta ",
          "content": "Outward Acts Indicate The Inward Intent."
      },
      {
          "img": "1.png",
          "title": "Actio Non Accrevit Infra Sex Annos ",
          "content": "The Action Has Not Accrued Within Six Years."
      },
      {
          "img": "2.png",
          "title": "Actio Non Datur Non Damnificato ",
          "content": "An Action Is Not Given To One Who Is Not Injured."
      },
      {
          "img": "3.png",
          "title": "Actio Personalis Moritur Cum Persona ",
          "content": "A Personal Action Dies With The Person."
      },
      {
          "img": "4.png",
          "title": "Actiones Legis ",
          "content": "Law Suits."
      },
      {
          "img": "5.png",
          "title": "Actori Incumbit Onus Probatio",
          "content": "On The Plaintiff Rests The Proving. The Burden Of Proof Falls To The Plaintiff, Claimant, Or Petitioner According To Roman Law."
      },
      {
          "img": "6.png",
          "title": "Actus Nemini Facit Injuriam ",
          "content": "The Act Of The Law Does No One Wrong."
      },
      {
          "img": "7.png",
          "title": "Actus Non Facit Reum Nisi Mens Sit Rea ",
          "content": "The Act Does Not Make One Guilty Unless There Be A Criminal Intent."
      },
      {
          "img": "8.png",
          "title": "Actus Reus",
          "content": "Guilty Act. Part Of What Proves Criminal Liability (With Mens Rea)."
      },
      {
          "img": "1.png",
          "title": "Ad Coelum",
          "content": "To The Sky. Abbreviated From Cuius Est Solum Eius Est Usque Ad Coelum Et Ad Infernos Which Translates To [For] Whoever Owns [The] Soil, [It] Is His All The Way [Up] To Heaven And [Down] To Hell. The Principle That The Owner Of A Parcel Of Land Also Owns The Air Above And The Ground Below The Parcel."
      },
      {
          "img": "2.png",
          "title": "Ad Colligenda Bona",
          "content": "To Collect The Goods."
      },
      {
          "img": "3.png",
          "title": "Ad Ea Quae Frequentius Acciduunt Jura Adaptantur ",
          "content": "The Laws Are Adapted To Those Cases Which Occur More Frequently."
      },
      {
          "img": "4.png",
          "title": "Ad Hoc",
          "content": "For This. Generally Signifies A Solution Designed For A Specific Problem Or Task, Non-Generalizable, And Not Intended To Be Able To Be Adapted To Other Purposes."
      },
      {
          "img": "5.png",
          "title": "Ad Hominem",
          "content": "At The Person. Attacking An Opponent'S Character Rather Than Answering His Argument."
      },
      {
          "img": "6.png",
          "title": "Ad Idem",
          "content": "To The Same Thing. In Agreement."
      },
      {
          "img": "7.png",
          "title": "Ad Infinitum",
          "content": "To Infinity. To Continue Forever."
      },
      {
          "img": "8.png",
          "title": "Ad Litem",
          "content": "For The Case. Describes Those Designated To Represent Parties Deemed Incapable Of Representing Themselves, Such As A Child Or Incapacitated Adult."
      },
      {
          "img": "1.png",
          "title": "Ad Perpetuam Rei Memoriam ",
          "content": "For A Perpetual Memorial Of The Matter."
      },
      {
          "img": "2.png",
          "title": "Ad Quaestionem Facti Non Respondent Judices; Ad Quaestionem Legis Non Respondent Juratores ",
          "content": "The Judges Do Not Answer To A Question Of Fact; The Jury Do Not Answer To A Question Of Law."
      },
      {
          "img": "3.png",
          "title": "Ad Quod Damnum",
          "content": "According To The Harm. Used In Tort Law. Implies That The Reward Or Penalty Ought To Correspond To The Damage Suffered Or Inflicted."
      },
      {
          "img": "4.png",
          "title": "Ad Valorem",
          "content": "According To Value."
      },
      {
          "img": "5.png",
          "title": "Adjournment Sine Die",
          "content": "Adjournment Without A Day. When An Assembly Adjourns Without Setting A Date For Its Next Meeting."
      },
      {
          "img": "6.png",
          "title": "Aedificare In Tuo Proprio Solo Non Licet Quod Alteri Noceat ",
          "content": "It Is Not Lawful To Build On One's Own Land What May Be Injurious To Another."
      },
      {
          "img": "7.png",
          "title": "Aequitas Legem Sequitur ",
          "content": "Equity Follows The Law."
      },
      {
          "img": "8.png",
          "title": "Aequitas Nunquam Contravenit Legem ",
          "content": "Equity Never Contradicts The Law."
      },
      {
          "img": "1.png",
          "title": "Affidavit",
          "content": "He Has Sworn. A Formal Statement Of Fact."
      },
      {
          "img": "2.png",
          "title": "Alibi ",
          "content": "At Another Place, Elsewhere."
      },
      {
          "img": "3.png",
          "title": "Alienatio Rei Praefertur Juri Accrescendi ",
          "content": "Alienation Is Preferred By Law Rather Than Accumulation."
      },
      {
          "img": "4.png",
          "title": "Aliunde ",
          "content": "From Elsewhere, Or, From A Different Source."
      },
      {
          "img": "5.png",
          "title": "Allegans Contraria Non Est Audiendus ",
          "content": "One Making Contradictory Statements Is Not To Be Heard."
      },
      {
          "img": "6.png",
          "title": "Allegans Suam Turpitudinem Non Est Audiendus ",
          "content": "One Alleging His Own Infamy Is Not To Be Heard."
      },
      {
          "img": "7.png",
          "title": "Allegatio Contra Factum Non Est Admittenda ",
          "content": "An Allegation Contrary To A Deed Is Not To Be Heard."
      },
      {
          "img": "8.png",
          "title": "Alter Ego",
          "content": "Another I. A Second Identity Living Within A Person."
      },
      {
          "img": "1.png",
          "title": "Ambiguitas Contra Stipulatorem Est ",
          "content": "An Ambiguity Is Most Strongly Construed Against The Party Using It."
      },
      {
          "img": "2.png",
          "title": "Ambiguitas Verborum Patens Nulla Verificatione Excluditur ",
          "content": "A Patent Ambiguity Is Never Helped By Averment."
      },
      {
          "img": "3.png",
          "title": "Amicus Curiae",
          "content": "Friend Of The Court. A Person Who Offers Information To A Court Regarding A Case Before It."
      },
      {
          "img": "4.png",
          "title": "Angliae Jura In Omni Casu Libertati Dant Favorem ",
          "content": "The Laws Of England Are Favorable In Every Case To Liberty."
      },
      {
          "img": "5.png",
          "title": "Animo Furandi ",
          "content": "With An Intention Of Stealing."
      },
      {
          "img": "6.png",
          "title": "Animo Testandi ",
          "content": "With An Intention Of Making A Will."
      },
      {
          "img": "7.png",
          "title": "Animus Contrahendi",
          "content": "Contractual Intent. Intention To Contract."
      },
      {
          "img": "8.png",
          "title": "Animus Nocendi",
          "content": "Intention To Harm. The Subjective State Of Mind Of The Author Of A Crime, With Reference To The Exact Knowledge Of Illegal Content Of His Behaviour, And Of Its Possible Consequences."
      },
      {
          "img": "1.png",
          "title": "Animus Possidendi",
          "content": "Intention To Possess. In Order To Claim Possessory Rights, An Individual Must Establish Physical Control Of The Res And The Intention To Possess (I.E. Animus Possidendi)"
      },
      {
          "img": "2.png",
          "title": "Animus Revertendi",
          "content": "Intention To Return. Wild Animals, Such As Bees And Homing Pigeons, That By Habit Go 'Home' To Their Possessor. Used When Discussing Ferae Naturae."
      },
      {
          "img": "3.png",
          "title": "Annus Luctus ",
          "content": "The Year Of Mourning."
      },
      {
          "img": "4.png",
          "title": "Ante",
          "content": "Before."
      },
      {
          "img": "5.png",
          "title": "Aqua Currit Et Debet Currere, Ut Currere Solebat ",
          "content": "Water Runs And Ought To Run."
      },
      {
          "img": "6.png",
          "title": "Arbitrium Est Judicium ",
          "content": "An Award Is A Judgment."
      },
      {
          "img": "7.png",
          "title": "Arbor Dum Crescit; Lignum Cum Crescere Nescit ",
          "content": "A Tree While It Grows, Wood When It Cannot Grow."
      },
      {
          "img": "8.png",
          "title": "Argumentum Ab Auctoritate Fortissimum Est In Lege ",
          "content": "An Argument Drawn From Authority Is The Strongest In Law."
      },
      {
          "img": "1.png",
          "title": "Argumentum Ab Impossibilii Plurimum Valet In Lege ",
          "content": "An Argument From Impossibility Is Very Strong In Law."
      },
      {
          "img": "2.png",
          "title": "Argumentum Ad Hominem ",
          "content": "An Argument Directed A The Person."
      },
      {
          "img": "3.png",
          "title": "Argumentum Ad Ignoratiam ",
          "content": "An Argument Based Upon Ignorance (I.E. Of One'S Adversary)."
      },
      {
          "img": "4.png",
          "title": "Arma In Armatos Sumere Jura Sinunt ",
          "content": "The Laws Permit The Taking Up Of Arms Against The Armed."
      },
      {
          "img": "5.png",
          "title": "Assentio Mentium ",
          "content": "The Meeting Of Minds, I.E. Mutual Assent."
      },
      {
          "img": "6.png",
          "title": "Assignatus Utitur Jure Auctoris ",
          "content": "An Assignee Is Clothed With Rights Of His Assignor."
      },
      {
          "img": "7.png",
          "title": "Audi Alteram Partem",
          "content": "Hear The Other Side. Refers To The Idea That One Cannot Be Fairly Judged Unless The Cases For And Against Them Have Been Heard."
      },
      {
          "img": "8.png",
          "title": "Aula Regis ",
          "content": "The King'S Court."
      },
      {
          "img": "1.png",
          "title": "Benignior Sententia In Verbis Generalibus Seu Dubiis Est Preferenda ",
          "content": "The More Favorable Construction Is To Be Placed On General Or Doubtful Words."
      },
      {
          "img": "2.png",
          "title": "Bis Dat Qui Cito Dat ",
          "content": "He Gives (Pays) Twice Who Pays Promptly. ."
      },
      {
          "img": "3.png",
          "title": "Bona Fide",
          "content": "In Good Faith. Implies Sincere Good Intention Regardless Of Outcome."
      },
      {
          "img": "4.png",
          "title": "Bona Vacantia",
          "content": "Ownerless Goods."
      },
      {
          "img": "5.png",
          "title": "Boni Judicis Est Ampliare Jurisdictionem ",
          "content": "It Is The Part Of A Good Judge To Enlarge His Jurisdiction, I.E. Remedial Authority."
      },
      {
          "img": "6.png",
          "title": "Boni Judicis Est Judicium Sine Dilatione Mandare Executioni ",
          "content": "It Is The Duty Of A Good Judge To Cause Execution To Issue On A Judgment Without Delay."
      },
      {
          "img": "7.png",
          "title": "Boni Judicis Lites Dirimere Est ",
          "content": "It Is The Duty Of A Good Judge To Prevent Litigation."
      },
      {
          "img": "8.png",
          "title": "Bonus Judex Secundum Aequum Et Bonum Judicat Et Aequitatem Stricto Juri Praefert ",
          "content": "A Good Judge Decides According To Justice And Right And Prefers Equity To Strict Law."
      },
      {
          "img": "1.png",
          "title": "Breve Judiciale Non Cadit Pro Defectu Formae ",
          "content": "A Judicial Writing Does Not Fail Through Defect Of Form."
      },
      {
          "img": "2.png",
          "title": "Cadit Quaestio",
          "content": "The Question Falls. Indicates That A Settlement To A Dispute Or Issue Has Been Reached, And The Issue Is Now Resolved."
      },
      {
          "img": "3.png",
          "title": "Cassetur Billa (Breve) ",
          "content": "Let The Writ Be Quashed."
      },
      {
          "img": "4.png",
          "title": "Casus Belli",
          "content": "Case Of War. The Justification For Acts Of War."
      },
      {
          "img": "5.png",
          "title": "Casus Fortuitus",
          "content": "Fortuitous Event. Force Majeure, Specifically A Man-Made Inevitable Accident (E.G. Riots, Strikes, Civil War); Ex: When H.M.S. Bounty Was Destroyed By Hurricane Sandy, October 29, 2012, Casus Fortuitus Would Describe The H.M.S. Bounty Being At The Wrong Place When Hurricane Sandy Came Up The Coast.Hms Bounty Sinks Compare Vis Major (See Below)."
      },
      {
          "img": "6.png",
          "title": "Casus Fortuitus Non Est Spectandus; Et Nemo Tenetur Divinare ",
          "content": "A Fortuitous Event Is Not To Be Foreseen And No Person Is Bound To Divine It."
      },
      {
          "img": "7.png",
          "title": "Catalla Reputantur Inter Minima In Lege ",
          "content": "Chattels Are Considered In Law Among The Minor Things."
      },
      {
          "img": "8.png",
          "title": "Causa Proxima, Non Remota Spectatur ",
          "content": "The Immediate, And Not The Remote Cause Is To Be Considered."
      },
      {
          "img": "1.png",
          "title": "Caveat",
          "content": "May He Beware. When Used By Itself, Refers To A Qualification, Or Warning."
      },
      {
          "img": "2.png",
          "title": "Caveat Emptor",
          "content": "Let The Buyer Beware. In Addition To The General Warning, Also Refers To A Legal Doctrine Wherein A Buyer Could Not Get Relief From A Seller For Defects Present On Property Which Rendered It Unfit For Use."
      },
      {
          "img": "3.png",
          "title": "Caveat Venditor ",
          "content": "Let The Seller Beware."
      },
      {
          "img": "4.png",
          "title": "Cepi Corpus Et Est Languidum ",
          "content": "I Have Taken The Body And The Prisoner Is Sick."
      },
      {
          "img": "5.png",
          "title": "Cepi Corpus Et Paratum Habeo ",
          "content": "I Have Taken The Body And Have It Ready."
      },
      {
          "img": "6.png",
          "title": "Certiorari",
          "content": "To Be Apprised. A Type Of Writ Seeking Judicial Review."
      },
      {
          "img": "7.png",
          "title": "Ceteris Paribus",
          "content": "With Other Things The Same. More Commonly Rendered In English As 'All Other Things Being Equal."
      },
      {
          "img": "8.png",
          "title": "Cogitationis Poenam Nemo Patitur",
          "content": "Nobody Suffers Punishment For Mere Intent."
      },
      {
          "img": "1.png",
          "title": "Communio Bonorum",
          "content": "Community Of Property. The Aggregate Of Marital Property Under A Community Property Matrimonial Regime."
      },
      {
          "img": "2.png",
          "title": "Compensatio Morae",
          "content": "Balance Of Delay. Delay In Payment Or Performance On The Part Of Both The Debtor And The Creditor."
      },
      {
          "img": "3.png",
          "title": "Compos Mentis",
          "content": "Having Command Of Mind. Of Sound Mind. Also Used In The Negative 'Non Compos Mentis', Meaning 'Not Of Sound Mind'."
      },
      {
          "img": "4.png",
          "title": "Condicio Sine Qua Non",
          "content": "A Condition Without Which It Could Not Be. An Indispensable And Essential Action, Condition, Or Ingredient."
      },
      {
          "img": "5.png",
          "title": "Consensu ",
          "content": "Unanimously Or, By General Consent."
      },
      {
          "img": "6.png",
          "title": "Consensus Ad Idem",
          "content": "Agreement To The Same. Meeting Of The Minds, Mutual Assent, Or Concurrence Of Wills. Parties Must Be Of One Mind And Their Promises Must Relate To The Same Subject Or Object Also Consensus In Idem."
      },
      {
          "img": "7.png",
          "title": "Consensus Facit Legem",
          "content": "Consensus Makes The Law. Stipulates That When Two Or More Persons Arrive At A Good Faith Agreement, The Law Will Insist On That Agreement Being Carried Out."
      },
      {
          "img": "8.png",
          "title": "Consuetudo Loci Observanda Est ",
          "content": "The Custom Of The Place Is To Be Observed."
      },
      {
          "img": "1.png",
          "title": "Consuetudo Pro Lege Servatur",
          "content": "Custom Is Held As Law. Where No Laws Apply To A Given Situation, The Customs Of The Place And Time Will Have The Force Of Law."
      },
      {
          "img": "2.png",
          "title": "Contemporanea Expositio Est Optima Et Fortissima In Lege ",
          "content": "A Contemporaneous Exposition Is Best And Most Powerful In Law."
      },
      {
          "img": "3.png",
          "title": "Contra",
          "content": "Against. Used In Case Citations To Indicate That The Cited Source Directly Contradicts The Point Being Made."
      },
      {
          "img": "4.png",
          "title": "Contra Bonos Mores",
          "content": "Against Good Morals. Contracts So Made Are Generally Illegal And Unenforceable."
      },
      {
          "img": "5.png",
          "title": "Contra Legem",
          "content": "Against The Law. Used When A Court Or Tribunal Hands Down A Decision That Is Contrary To The Laws Of The Governing State."
      },
      {
          "img": "6.png",
          "title": "Contra Non Valentem Agere Nulla Currit Praescriptio ",
          "content": "No Prescription Runs Against A Person Not Able To Act."
      },
      {
          "img": "7.png",
          "title": "Contra Proferentem",
          "content": "Against The One Bringing Forth. Used In Contract Law To Stipulate That An Ambiguous Term In A Contract Shall Be Interpreted Against The Interests Of The Party That Insisted Upon The Term'S Inclusion. Prevents The Intentional Additions Of Ambiguous Terminology From Being Exploited By The Party Who Insisted On Its Inclusion."
      },
      {
          "img": "8.png",
          "title": "Contractus Est Quasi Actus Contra Actum ",
          "content": "A Contract Is An Act As It Were Against An Act."
      },
      {
          "img": "1.png",
          "title": "Contradictio In Adjecto",
          "content": "Contradiction In Itself. A Contradiction In Terms."
      },
      {
          "img": "2.png",
          "title": "Conventio Et Modus Vincunt Legem ",
          "content": "A Contract And Agreement Overcome The Law."
      },
      {
          "img": "3.png",
          "title": "Conventio Privatorum Non Potest Publico Juri Derogare ",
          "content": "An Agreement Of Private Persons Cannot Derogate From Public Right."
      },
      {
          "img": "4.png",
          "title": "Coram Domino Rege ",
          "content": "In The Presence Of Our Lord The King."
      },
      {
          "img": "5.png",
          "title": "Coram Non Judice",
          "content": "Before One Who Is Not A Judge. Refers To A Legal Proceeding Without A Judge, Or With A Judge Who Does Not Have Proper Jurisdiction."
      },
      {
          "img": "6.png",
          "title": "Corpus ",
          "content": "Body."
      },
      {
          "img": "7.png",
          "title": "Corpus Delicti",
          "content": "Body Of The Crime. A Person Cannot Be Convicted Of A Crime, Unless It Can Be Proven That The Crime Was Even Committed."
      },
      {
          "img": "8.png",
          "title": "Corpus Humanum Non Recipit Aestimationem ",
          "content": "A Human Body Is Not Susceptible Of Appraisement. ."
      },
      {
          "img": "1.png",
          "title": "Corpus Juris",
          "content": "Body Of Law. The Complete Collection Of Laws Of A Particular Jurisdiction Or Court."
      },
      {
          "img": "2.png",
          "title": "Corpus Juris Civilis",
          "content": "Body Of Civil Law. The Complete Collection Of Civil Laws Of A Particular Jurisdiction Or Court. Also Sometimes Used To Refer To The Code Of Justinian."
      },
      {
          "img": "3.png",
          "title": "Corpus Juris Gentium",
          "content": "Body Of The Law Of Nations. The Complete Collection Of International Law."
      },
      {
          "img": "4.png",
          "title": "Corpus Juris Secundum",
          "content": "An Encyclopedia Of Us Law Drawn From Us Federal And State Court Decisions."
      },
      {
          "img": "5.png",
          "title": "Crescente Malitia Crescere Debet Et Poena ",
          "content": "Vice Increasing, Punishment Ought Also To Increase."
      },
      {
          "img": "6.png",
          "title": "Crimen Falsi",
          "content": "Crime Of Falsifying. Forgery."
      },
      {
          "img": "7.png",
          "title": "Crimen Omnia Ex Se Nata Vitiat ",
          "content": "Crime Vitiates Every Thing, Which Springs From It."
      },
      {
          "img": "8.png",
          "title": "Crimen Trahit Personam ",
          "content": "The Crime Carries The Person."
      },
      {
          "img": "1.png",
          "title": "Cui Bono",
          "content": "As A Benefit To Whom?. Suggests That The Perpetrator(S) Of A Crime Can Often Be Found By Investigating Those Who Would Have Benefited Financially From The Crime, Even If It Is Not Immediately Obvious."
      },
      {
          "img": "2.png",
          "title": "Cuius Est Solum Eius Est Usque Ad Coelum Et Ad Inferos",
          "content": "For Whoever Owns The Soil, It Is Theirs Up To Heaven And Down To Hell. Used In Reference To The Rights Of Property Owners To The Air Above, And Land Below, Their Property."
      },
      {
          "img": "3.png",
          "title": "Cujus Est Dare, Ejus Est Disponere ",
          "content": "He Who Has A Right To Give Has The Right To Dispose Of The Gift."
      },
      {
          "img": "4.png",
          "title": "Cujus Est Solum, Ejus Est Usque Ad Coelam; Et Ad Inferos ",
          "content": "He Who Owns The Soil Owns It Up To The Sky; And To Its Depth."
      },
      {
          "img": "5.png",
          "title": "Cum Duo Inter Se Pugnantia Reperiuntur In Testamentis Ultimum Ratum Est ",
          "content": "When Two Things Repugnant To Each Other Are Found In A Will, The Last Is To Be Confirmed."
      },
      {
          "img": "6.png",
          "title": "Cursus Curiae Est Lex Curiae ",
          "content": "The Practice Of The Court Is The Law Of The Court."
      },
      {
          "img": "7.png",
          "title": "Custos Morum ",
          "content": "A Guardian Of Morals."
      },
      {
          "img": "8.png",
          "title": "Damnum Sine Injuria ",
          "content": "Damage Without Legal Injury."
      },
      {
          "img": "1.png",
          "title": "De Bonis Asportatis",
          "content": "Carrying Goods Away. Specifies That Larceny Was Taking Place In Addition To Any Other Crime Named. E.G. 'Trespass De Bonis Asportatis'."
      },
      {
          "img": "2.png",
          "title": "De Bonis Non Administratis",
          "content": "Of Goods Not Administered. Assets Of An Estate Remaining After The Death (Or Removal) Of The Designated Estate Administrator. An 'Administrator De Bonis Non Administratis' Will Then Be Appointed To Dispose Of These Goods."
      },
      {
          "img": "3.png",
          "title": "De Die In Diem",
          "content": "From Day To Day. Generally Refers To A Type Of Labor In Which The Worker Is Paid Fully At The Completion Of Each Day'S Work."
      },
      {
          "img": "4.png",
          "title": "De Facto",
          "content": "In Fact. Literally 'From Fact'; Often Used To Mean Something That Is True In Practice, But Has Not Been Officially Instituted Or Endorsed. 'For All Intents And Purposes'. Cf. De Jure."
      },
      {
          "img": "5.png",
          "title": "De Futuro",
          "content": "Concerning The Future. At A Future Date."
      },
      {
          "img": "6.png",
          "title": "De Integro",
          "content": "Concerning The Whole. Often Used To Mean 'Start It All Over', In The Context Of 'Repeat De Integro'."
      },
      {
          "img": "7.png",
          "title": "De Jure",
          "content": "According To Law. Literally 'From Law'; Something That Is Established In Law, Whether Or Not It Is True In General Practice. Cf. De Facto."
      },
      {
          "img": "8.png",
          "title": "De Lege Ferenda",
          "content": "Of The Law As It Should Be. Used In The Context Of 'How The Law Should Be', Such As For Proposed Legislation."
      },
      {
          "img": "1.png",
          "title": "De Lege Lata",
          "content": "Of The Law As It Is. Concerning The Law As It Exists, Without Consideration Of How Things Should Be."
      },
      {
          "img": "2.png",
          "title": "De Minimis",
          "content": "About The Smallest Things. Various Legal Areas Concerning Small Amounts Or Small Degrees."
      },
      {
          "img": "3.png",
          "title": "De Minimis Non Curat Lex",
          "content": "The Law Does Not Concern Itself With The Smallest [Things]. There Must Be A Minimal Level Of Substance Or Impact In Order To Bring A Legal Action."
      },
      {
          "img": "4.png",
          "title": "De Mortuis Nil Nisi Bonum",
          "content": "Of The Dead, [Speak] Nothing Unless Good. Social Convention That It Is Inappropriate To Speak Ill Of The Recently Deceased, Even If They Were An Enemy."
      },
      {
          "img": "5.png",
          "title": "De Novo",
          "content": "Anew. Often Used In The Context Of 'Trial De Novo'. A New Trial Ordered When The Previous One Failed To Reach A Conclusion."
      },
      {
          "img": "6.png",
          "title": "Debellatio",
          "content": "Warring Down. Complete Annihilation Of A Warring Party, Bringing About The End Of The Conflict."
      },
      {
          "img": "7.png",
          "title": "Debile Fundamentum Fallit Opus ",
          "content": "Where There Is A Weak Foundation, The Work Fails."
      },
      {
          "img": "8.png",
          "title": "Debita Sequuntur Personam Debitoria ",
          "content": "Debts Follow The Person Of The Debtor."
      },
      {
          "img": "1.png",
          "title": "Debitor Non Praesumitur Donare ",
          "content": "A Debtor Is Not Presumed To Make A Gift."
      },
      {
          "img": "2.png",
          "title": "Debitum Et Contractus Sunt Nullius Loci ",
          "content": "Debt And Contract Are Of No Particular Place."
      },
      {
          "img": "3.png",
          "title": "Debitum In Praesenti, Solvendum In Futuro ",
          "content": "A Present Debt Is To Be Discharged In The Future."
      },
      {
          "img": "4.png",
          "title": "Delegata Potestas Non Potest Delegari ",
          "content": "A Delegated Authority Cannot Be Again Delegated."
      },
      {
          "img": "5.png",
          "title": "Delegatus Non Potest Delegare",
          "content": "That Which Has Been Delegated Cannot Delegate [Further]."
      },
      {
          "img": "6.png",
          "title": "Deorum Injuriae Diis Curae",
          "content": "The Gods Take Care Of Injuries To The Gods. Blasphemy Is A Crime Against The State, Rather Than Against God."
      },
      {
          "img": "7.png",
          "title": "Derivativa Potestas Non Potest Esse Major Primitiva ",
          "content": "The Power Which Is Derived Cannot Be Greater Than That From Which It Is Derived."
      },
      {
          "img": "8.png",
          "title": "Deus Solus Haeredem Facere Potest, Non Homo ",
          "content": "God Alone, Not Man, Can Make An Heir."
      },
      {
          "img": "1.png",
          "title": "Dictum",
          "content": "(Thing) Said. A Statement Given Some Weight Or Consideration Due To The Respect Given The Person Making It."
      },
      {
          "img": "2.png",
          "title": "Dies Dominicus Non Est Juridicus ",
          "content": "Sunday Is Not A Day In Law."
      },
      {
          "img": "3.png",
          "title": "Discretio Est Discernere Per Legem Quid Sit Justum ",
          "content": "Discretion Is To Discern Through Law What Is Just."
      },
      {
          "img": "4.png",
          "title": "Doli Incapax",
          "content": "Incapable Of Guilt. Presumption That Young Children Or Persons With Diminished Mental Capacity Cannot Form The Intent To Commit A Crime."
      },
      {
          "img": "5.png",
          "title": "Dolus Specialis",
          "content": "Specific Deceit. Heavily Used In The Context Of Genocide In International Law."
      },
      {
          "img": "6.png",
          "title": "Dominium ",
          "content": "Ownership."
      },
      {
          "img": "7.png",
          "title": "Domitae Naturae",
          "content": "Tame By Nature. Tame Or Domesticated Animal. Also Called Mansuetae Naturae. Opposite Of Ferae Naturae (Below)"
      },
      {
          "img": "8.png",
          "title": "Domus Sua Cuique Est Tutissimum Refugium ",
          "content": "Every Man S House Is His Safest Refuge."
      },
      {
          "img": "1.png",
          "title": "Dona Clandestina Sunt Semper Suspiciosa ",
          "content": "Clandestine Gifts Are Always Suspicious."
      },
      {
          "img": "2.png",
          "title": "Donatio Mortis Causa",
          "content": "Deathbed Gift. Gift Causa Mortis; 'The Donor, Contemplating Imminent Death, Declares Words Of Present Gifting And Delivers The Gift To The Donee Or Someone Who Clearly Takes Possession On Behalf Of The Donee. The Gift Becomes Effective At Death But Remains Revocable Until That Time."
      },
      {
          "img": "3.png",
          "title": "Dormiunt Leges Aliquando, Nunquam Moriuntur ",
          "content": "The Laws Sometimes Sleep, But Never Die."
      },
      {
          "img": "4.png",
          "title": "Doti Lex Favet; Praemium Pudoris Est; Ideo Parcatur ",
          "content": "The Law Favors Dower; It Is The Reward Of Chastity, Therefore Let It Be Preserved."
      },
      {
          "img": "5.png",
          "title": "Dramatis Personae",
          "content": "Persons Of The Drama."
      },
      {
          "img": "6.png",
          "title": "Dubia In Meliorem Partem Interpretari Debent",
          "content": "Doubtful Things Should Be Interpreted In The Best Way. Often Spoken As 'To Give The Benefit Of The Doubt.'"
      },
      {
          "img": "7.png",
          "title": "Dubitante ",
          "content": "Doubting The Correctness Of The Decision."
      },
      {
          "img": "8.png",
          "title": "Duces Tecum",
          "content": "Bring With You. A 'Subpoena Duces Tecum' Is A Summons To Produce Physical Evidence For A Trial."
      },
      {
          "img": "1.png",
          "title": "Duo Non Possunt In Solido Unam Rem Possidere ",
          "content": "Two Cannot Possess One Thing Each In Entirety."
      },
      {
          "img": "2.png",
          "title": "Ei Incumbit Probatio Qui ",
          "content": "The Onus Of Proving A Fact Rests Upon The Man."
      },
      {
          "img": "3.png",
          "title": "Ei Incumbit Probatio Qui Dicit, Non Qui Negat ",
          "content": "The Burden Of The Proof Lies Upon Him Who Affirms, Not He Who Denies."
      },
      {
          "img": "4.png",
          "title": "Ejusdem Generis",
          "content": "Of The Same Class. Known As A 'Canon Of Construction', It States That When A Limited List Of Specific Things Also Includes A More General Class, That The Scope Of That More General Class Shall Be Limited To Other Items More Like The Specific Items In The List."
      },
      {
          "img": "5.png",
          "title": "Eo Nomine",
          "content": "By That Name."
      },
      {
          "img": "6.png",
          "title": "Erga Omnes",
          "content": "Towards All. Refers To Rights Or Obligations That Are Owed Towards All."
      },
      {
          "img": "7.png",
          "title": "Ergo",
          "content": "Therefore."
      },
      {
          "img": "8.png",
          "title": "Erratum",
          "content": "Having Been Made In Error."
      },
      {
          "img": "1.png",
          "title": "Error, Qui Non Resistitur Approbatur ",
          "content": "An Error Not Resisted Is Approved."
      },
      {
          "img": "2.png",
          "title": "Et Al.",
          "content": "And Others. Abbreviation Of Et Alii, Meaning 'And Others'."
      },
      {
          "img": "3.png",
          "title": "Et Cetera",
          "content": "And Other Things. Generally Used In The Sense Of 'And So Forth'."
      },
      {
          "img": "4.png",
          "title": "Et Seq.",
          "content": "And The Following Things. Abbreviation Of Et Sequens, Meaning 'And The Following Ones'. Used In Citations To Indicate That The Cited Portion Extends To The Pages Following The Cited Page."
      },
      {
          "img": "5.png",
          "title": "Et Uxor",
          "content": "And Wife. Usually Used Instead Of Naming A Man'S Wife As A Party In A Case."
      },
      {
          "img": "6.png",
          "title": "Et Vir",
          "content": "And Husband. Usually Used Instead Of Naming A Woman'S Husband As A Party In A Case."
      },
      {
          "img": "7.png",
          "title": "Ex Aequo Et Bono",
          "content": "Of Equity And [The] Good. Usually Defined As 'What Is Right And Good.' Used To Describe The Power Of A Judge Or Arbiter To Consider Only What Is Fair And Good For The Specific Case, And Not Necessarily What The Law May Require. In Courts, Usually Only Done If All Parties Agree."
      },
      {
          "img": "8.png",
          "title": "Ex Ante",
          "content": "Of Before. Essentially Meaning 'Before The Event', Usually Used When Forecasting Future Events."
      },
      {
          "img": "1.png",
          "title": "Ex Cathedra",
          "content": "From The Chair. Where Chair Refers To Authority Or Position. Authority Derived From One'S Position."
      },
      {
          "img": "2.png",
          "title": "Ex Concessis",
          "content": "From What Has Been Conceded Already. Often Used In A 'Guilt By Association' Context."
      },
      {
          "img": "3.png",
          "title": "Ex Delicto",
          "content": "From A Transgression. The Consequence Of A Crime Or Tort."
      },
      {
          "img": "4.png",
          "title": "Ex Dolo Malo Actio Non Oritur ",
          "content": "A Right Of Action Cannot Arise Out Of Fraud."
      },
      {
          "img": "5.png",
          "title": "Ex Facie",
          "content": "On The Face. If A Contract Is Blatantly And Obviously Incorrect Or Illegal, It Can Be Considered Void Ex Facie Without Any Further Analysis Or Arguments."
      },
      {
          "img": "6.png",
          "title": "Ex Fida Bona",
          "content": "Good Business Norms."
      },
      {
          "img": "7.png",
          "title": "Ex Gratia",
          "content": "By Favor. Something Done Voluntarily And With No Expectation Of A Legal Liability Arising Therefrom."
      },
      {
          "img": "8.png",
          "title": "Ex Injuria Jus Non Oritur",
          "content": "Law Does Not Arise From Injustice. A Principle In International Law That Unjust Acts Cannot Create Laws."
      },
      {
          "img": "1.png",
          "title": "Ex Nihilo Nil Fit ",
          "content": "From Nothing Nothing Comes."
      },
      {
          "img": "2.png",
          "title": "Ex Nudo Pacto Actio Non Oritur ",
          "content": "No Action Arises On A Contract Without A Consideration."
      },
      {
          "img": "3.png",
          "title": "Ex Nunc",
          "content": "From Now On. Term Used In Contract Law To Specify Terms That Are Voided Or Confirmed In Effect Only In The Future And Not Prior To The Contract, Or Its Adjudication. Cf. Ex Tunc."
      },
      {
          "img": "4.png",
          "title": "Ex Officio",
          "content": "From The Office. Something Done Or Realized By The Fact Of Holding An Office Or Position."
      },
      {
          "img": "5.png",
          "title": "Ex Parte",
          "content": "From [For] One Party. A Decision Reached, Or Case Brought, By Or For One Party Without The Other Party Being Present."
      },
      {
          "img": "6.png",
          "title": "Ex Post",
          "content": "From After. Based On Knowledge Of The Past."
      },
      {
          "img": "7.png",
          "title": "Ex Post Facto",
          "content": "From A Thing Done Afterward. Commonly Said As 'After The Fact.'"
      },
      {
          "img": "8.png",
          "title": "Ex Post Facto Law",
          "content": ". A Retroactive Law. E.G. A Law That Makes Illegal An Act That Was Not Illegal When It Was Done."
      },
      {
          "img": "1.png",
          "title": "Ex Praecedentibus Et Consequentibus Optima Fit Interpretatio ",
          "content": "The Best Interpretation Is Made From Things Preceding And Following."
      },
      {
          "img": "2.png",
          "title": "Ex Proprio Motu",
          "content": "By [One'S] Own Motion. Commonly Spoken As 'By One'S Own Accord.'"
      },
      {
          "img": "3.png",
          "title": "Ex Rel",
          "content": "Abbreviation Of Ex Relatione. Used When The Government Brings A Case That Arises From The Information Conveyed To It By A Third Party."
      },
      {
          "img": "4.png",
          "title": "Ex Tunc",
          "content": "From Then. Term Used In Contract Law To Specify Terms That Are Voided Or Confirmed In Effect From The Execution Of The Contract. Cf. Ex Nunc."
      },
      {
          "img": "5.png",
          "title": "Ex Turpi Causa Non Oritur Actio",
          "content": "From A Dishonorable Cause An Action Does Not Arise. A Party Cannot Bring A Legal Action For Consequences Of His Own Illegal Act."
      },
      {
          "img": "6.png",
          "title": "Exceptio Probat Regulam ",
          "content": "An Exception Proves The Rule."
      },
      {
          "img": "7.png",
          "title": "Executio Est Executio Juris Secundum Judicium ",
          "content": "Execution Is The Fulfillment Of The Law In Accordance With The Judgment."
      },
      {
          "img": "8.png",
          "title": "Executio Est Finis Et Fructus Legis ",
          "content": "An Execution Is The End And The Fruit Of The Law."
      },
      {
          "img": "1.png",
          "title": "Executio Legis Non Habet Injuriam ",
          "content": "Execution Of The Law Does No Injury."
      },
      {
          "img": "2.png",
          "title": "Exempli Gratia",
          "content": "For The Sake Of Example. Usually Abbreviated 'E.G.'."
      },
      {
          "img": "3.png",
          "title": "Expressio Unius Est Exclusio Alterius",
          "content": "The Express Mention Of One Thing Excludes All Others. When Items Are Listed, Anything Not Explicitly Stated Is Assumed To Not Be Included."
      },
      {
          "img": "4.png",
          "title": "Extant",
          "content": "Existing. Refers To Things That Are Currently Existing At A Given Point, Rather Than Things That Are No Longer So."
      },
      {
          "img": "5.png",
          "title": "Extra Legem Positus Est Civiliter Mortuus ",
          "content": "One Out Of The Pale Of The Law (I.E. An Outlaw) Is Civilly Dead."
      },
      {
          "img": "6.png",
          "title": "Faciendum ",
          "content": "Something Which Is To Be Done."
      },
      {
          "img": "7.png",
          "title": "Facio Ut Facias",
          "content": "I Do, That You May Do. A Type Of Contract Wherein One Party Agrees To Do Work For The Other, In Order That The Second Party Can Then Perform Some Work For The First In Exchange."
      },
      {
          "img": "8.png",
          "title": "Factum",
          "content": "Deed. 1. An Assured Statement Made; 2. Completion Of A Will And All Its Parts To Make It Valid And Legal; 3). Book Of Facts And Law Presented In A Canadian Court."
      },
      {
          "img": "1.png",
          "title": "Facultas Probationum Non Est Angustanda ",
          "content": "The Right Of Offering Proof Is Not To Be Narrowed."
      },
      {
          "img": "2.png",
          "title": "Falsa Demonstratio Non Nocet ",
          "content": "A False Description Does Not Vitiate."
      },
      {
          "img": "3.png",
          "title": "Fatetur Facinus Qui Judicium Fugit ",
          "content": "He Who Flees Judgment Confesses His Guilt."
      },
      {
          "img": "4.png",
          "title": "Favor Contractus",
          "content": "Favor Of The Contract. A Concept In Treaty Law That Prefers The Maintaining Of A Contract Over Letting It Expire For Purely Procedural Reasons."
      },
      {
          "img": "5.png",
          "title": "Felix Qui Potuit Rerum Cognoscere Causas ",
          "content": "Happy Is He Who Has Been Able To Understand The Causes Of Things."
      },
      {
          "img": "6.png",
          "title": "Felo De Se",
          "content": "Felon Of Himself. A Suicide. This Archaic Term Stems From English Common Law, Where Suicide Was Legally A Felony, Thus A Person Who Committed Suicide Was Treated As A Felon For Purposes Of Estate Disposal."
      },
      {
          "img": "7.png",
          "title": "Felonia Implicatur In Qualibet Proditione ",
          "content": "Felony Is Implied In Every Treason."
      },
      {
          "img": "8.png",
          "title": "Ferae Naturae",
          "content": "Wild Animals By Nature. Wild Animals Residing On Unowned Property Do Not Belong To Any Party In A Dispute On The Land. Opposite Of Domitae Naturae (Above)."
      },
      {
          "img": "1.png",
          "title": "Festinatio Justitiae Est Noverca Infortunii ",
          "content": "The Hurrying Of Justice Is The Stepmother Of Misfortune."
      },
      {
          "img": "2.png",
          "title": "Fiat",
          "content": "Let It Be Done. A Warrant Issued By A Judge For Some Legal Proceedings."
      },
      {
          "img": "3.png",
          "title": "Fiat Justitia Et Pereat Mundus",
          "content": "Let There Be Justice, Though The World Perish. Often Used As A Motto, Notably By Ferdinand I, Holy Roman Emperor."
      },
      {
          "img": "4.png",
          "title": "Fiat Justitia Ruat Caelum",
          "content": "Let Justice Be Done Though The Heavens Fall. Also Sometimes A Motto, A Legal Maxim That Justice Must Be Done Regardless Of The Result Otherwise."
      },
      {
          "img": "5.png",
          "title": "Fictio Cedit Veritati; Fictio Juris Non Est, Ubi Veritas ",
          "content": "Fiction Yields To Truth. Where Truth Is, Fiction Of Law Does Not Exist."
      },
      {
          "img": "6.png",
          "title": "Fides Servanda Est ",
          "content": "Good Faith Is To Be Preserved."
      },
      {
          "img": "7.png",
          "title": "Fieri Facias",
          "content": "May You Cause To Be Done. A Writ Ordering The Local Law Enforcement To Ensure That Damages Awarded By The Court Are Properly Recovered. A Writ Of Execution."
      },
      {
          "img": "8.png",
          "title": "Filiatio Non Potest Probari ",
          "content": "Filiation Cannot Be Proved."
      },
      {
          "img": "1.png",
          "title": "Firmior Et Potentior Est Operatio Legis Quam Dispositio Hominis ",
          "content": "The Operation Of Law Is Firmer And More Powerful Than The Will Of Man."
      },
      {
          "img": "2.png",
          "title": "Forma Legalis Forma Essentialis Est ",
          "content": "Legal Form Is Essential Form."
      },
      {
          "img": "3.png",
          "title": "Fortior Est Custodia Legis Quam Hominis ",
          "content": "The Custody Of The Law Is Stronger Than That Of Man."
      },
      {
          "img": "4.png",
          "title": "Fortis Attachiamentum, Validior Praesumptionem",
          "content": "Strong Attachment, The Stronger Presumption. When Determining Whether A Chattel Is A Fixture: 'Size Doesn't Matter, How Much Or Degree Chattel Is Attached To 'Land' And To 'What'"
      },
      {
          "img": "5.png",
          "title": "Forum Non Conveniens",
          "content": "Disagreeable Forum. A Concept Wherein A Court Refuses To Hear A Particular Matter, Citing A More Appropriate Forum For The Issue To Be Decided."
      },
      {
          "img": "6.png",
          "title": "Fractionem Diei Non Recipit Lex ",
          "content": "The Law Does Not Regard A Fraction Of A Day."
      },
      {
          "img": "7.png",
          "title": "Fraus Est Celare Fraudem ",
          "content": "It Is A Fraud To Conceal A Fraud."
      },
      {
          "img": "8.png",
          "title": "Fraus Est Odiosa Et Non Praesumenda ",
          "content": "Fraud Is Odious And Is Not To Be Presumed."
      },
      {
          "img": "1.png",
          "title": "Fraus Et Jus Nunquam Cohabitant ",
          "content": "Fraud And Justice Never Dwell Together."
      },
      {
          "img": "2.png",
          "title": "Fructus Industriales",
          "content": "Industrial Fruits. Emblements; In Property Law, A Co-Owner Profitng From Her Or His Fructus Industriales Is Solely Responsible For Any Losses That My Occur. (Vs. Fructus Naturales, See Below)."
      },
      {
          "img": "3.png",
          "title": "Fructus Naturales",
          "content": "Natural Fruits. Vegetation Naturally Growing From Old Roots (As Pasturage) Or From Trees (As Timber Or Fruit) (Vs. Fructus Industriales, See Above)."
      },
      {
          "img": "4.png",
          "title": "Frustra Probatur Quod Probatum Non Relevat ",
          "content": "That Is Proved In Vain Which When Proved Is Not Relevant."
      },
      {
          "img": "5.png",
          "title": "Fumus Boni Iuris",
          "content": "Smoke Of A Good Right. Refers To Having A Sufficient Legal Basis To Bring Legal Action."
      },
      {
          "img": "6.png",
          "title": "Functus Officio",
          "content": "Having Performed His Office. A Person, Court, Statute, Or Legal Document That Has No Legal Authority, Because Its Original Legal Purpose Has Been Fulfilled."
      },
      {
          "img": "7.png",
          "title": "Furor Contrahi Matrimonium Non Sinit, Quia Consensus Opus Est ",
          "content": "Insanity Prevents Marriage From Being Contracted Because Consent Is Needed."
      },
      {
          "img": "8.png",
          "title": "Generale Nihil Certum Implicat ",
          "content": "A General Expression Implies Nothing Certain."
      },
      {
          "img": "1.png",
          "title": "Generalia Praecedunt, Specialia Sequuntur ",
          "content": "Things General Precede, Things Special Follow."
      },
      {
          "img": "2.png",
          "title": "Generalia Specialibus Non Derogant",
          "content": "The General Does Not Detract From The Specific. Specifies That A Certain Matter Of Law Be Covered By The Most Specific Laws Pertaining, In The Event That Broader Laws Conflict With The Specific One."
      },
      {
          "img": "3.png",
          "title": "Generalis Regula Generaliter Est Intelligenda ",
          "content": "A General Rule Is To Be Generally Understood."
      },
      {
          "img": "4.png",
          "title": "Gravamen",
          "content": "Things Weighing Down. The Basic Element Or Complaint Of A Lawsuit."
      },
      {
          "img": "5.png",
          "title": "Gravius Est Divinam Quam Temporalem Laedere Majestatem ",
          "content": "It Is More Serious To Hurt Divine Than Temporal Majesty."
      },
      {
          "img": "6.png",
          "title": "Guardian Ad Litem",
          "content": "Guardian For The Case. An Independent Party Appointed In Family Law Disputes To Represent Parties That Cannot Represent Themselves, Such As Minors, Developmentally Disabled, Or Elderly."
      },
      {
          "img": "7.png",
          "title": "Habeas Corpus",
          "content": "May You Have The Body. A Writ Used To Challenge The Legality Of Detention. Orders The Detaining Party To 'Have The (Living) Body' Of The Detained Brought Before The Court Where The Detention Will Be Investigated."
      },
      {
          "img": "8.png",
          "title": "Hostis Humani Generis",
          "content": "Enemy Of The Human Race. A Party Considered To Be The Enemy Of All Nations, Such As Maritime Pirates."
      },
      {
          "img": "1.png",
          "title": "Ibid.",
          "content": "In The Same Place. Abbreviation Of Ibidem, Meaning 'In The Same Place. Used When Citing Sources, To Indicate The Cited Source Came From The Identical Location As The Preceding One."
      },
      {
          "img": "2.png",
          "title": "Id Est (I.E) ",
          "content": "That Is. Abbreviation Of Id Est, Meaning 'That Is', In The Sense Of Restating Something That May Not Have Been Clear."
      },
      {
          "img": "3.png",
          "title": "Id Quod Commune Est, Nostrum Esse Dicitur ",
          "content": "That Which Is Common Is Said To Be Ours."
      },
      {
          "img": "4.png",
          "title": "Idem",
          "content": "The Same. Used In Citations To Indicate The Cited Source Came From The Same Source As The Preceding One, Though Not Necessarily The Same Page Or Location. Cf. Ibid."
      },
      {
          "img": "5.png",
          "title": "Idem Nihil Dicere Et Insufficienter Dicere Est ",
          "content": "It Is The Same To Say Nothing As Not To Say Enough."
      },
      {
          "img": "6.png",
          "title": "Ignorantia Facti Excusat, Ignorantia Juris Non Excusat ",
          "content": "Ignorance Of Fact Excuses, Ignorance Of Law Does Not Excuse."
      },
      {
          "img": "7.png",
          "title": "Ignorantia Juris Non Excusat",
          "content": "Ignorance Of The Law Does Not Excuse. A Principle That States That Not Having Knowledge Of A Law Is Not An Excuse For Breaking It."
      },
      {
          "img": "8.png",
          "title": "Imperium In Imperio ",
          "content": "A Sovereignty Within A Sovereignty."
      },
      {
          "img": "1.png",
          "title": "Impotentia Excusat Legem ",
          "content": "Impossibility Is An Excuse In The Law."
      },
      {
          "img": "2.png",
          "title": "Imprimatur",
          "content": "Let It Be Printed. An Authorization For A Document To Be Printed. Used In The Context Of Approval By A Religious Body Or Other Censoring Authority."
      },
      {
          "img": "3.png",
          "title": "Impunitas Semper Ad Deteriora Invitat ",
          "content": "Impunity Always Leads To Greater Crimes."
      },
      {
          "img": "4.png",
          "title": "In Absentia",
          "content": "In Absence. A Legal Proceeding Conducted Without The Presence Of One Party Is Said To Be Conducted In Absentia, E.G., Trial In Absentia Or Being Sentenced In Absentia."
      },
      {
          "img": "5.png",
          "title": "In Aequali Jure Melior Est Conditio Possidentis ",
          "content": "When The Parties Have Equal Rights, The Condition Of The Possessor Is Better."
      },
      {
          "img": "6.png",
          "title": "In Alta Proditione Nullus Potest Esse Acessorius; Sed Principalis Solum Modo ",
          "content": "In High Treason No One Can Be An Accessory; But A Principal Only."
      },
      {
          "img": "7.png",
          "title": "In Anglia Non Est Interregnum ",
          "content": "In England There Is No Interregnum."
      },
      {
          "img": "8.png",
          "title": "In Articulo Mortis",
          "content": "At The Moment Of Death. Often Used In Probate Law, As Well As For Testimony In The Sense Of A Dying Declaration."
      },
      {
          "img": "1.png",
          "title": "In Camera",
          "content": "In The Chamber. Conducted In Private, Or In Secret. The Opposite Of In Open Court."
      },
      {
          "img": "2.png",
          "title": "In Casu Extremae Necessitatis Omnia Sunt Communia ",
          "content": "In A Case Of Extreme Necessity Everything Is Common. ."
      },
      {
          "img": "3.png",
          "title": "In Criminalibus Probationes Debent Esse Luce Clariores ",
          "content": "In Criminal Cases The Proofs Ought To Be Cleared Than The Light."
      },
      {
          "img": "4.png",
          "title": "In Curia",
          "content": "In Court. Conducted In Open Court. The Opposite Of In Camera."
      },
      {
          "img": "5.png",
          "title": "In Curia Domini Regis, Ipse In Propria Persona Jura Discernit ",
          "content": "In The King S Court, The King Himself In His Own Person Dispenses Justice."
      },
      {
          "img": "6.png",
          "title": "In Delicto ",
          "content": "At Fault."
      },
      {
          "img": "7.png",
          "title": "In Esse",
          "content": "In Existence. Actually Existing In Reality. Opposite Of In Posse."
      },
      {
          "img": "8.png",
          "title": "In Extenso",
          "content": "In The Extended. In Extended Form, Or At Full Length. Often Used To Refer To Publication Of Documents, Where It Means The Full Unabridged Document Is Published."
      },
      {
          "img": "1.png",
          "title": "In Extremis",
          "content": "In The Extreme. In Extreme Circumstances. Often Used To Refer To 'At The Point Of Death.'"
      },
      {
          "img": "2.png",
          "title": "In Fictione Legis Aequitas Existit ",
          "content": "A Legal Fiction Is Consistent With Equity."
      },
      {
          "img": "3.png",
          "title": "In Flagrante Delicto",
          "content": "In Blazing Offense. Caught In The Actual Act Of Committing A Crime. Often Used As A Euphemism For A Couple Caught In The Act Of Sexual Intercourse, Though It Technically Refers To Being 'Caught In The Act' Of Any Misdeed."
      },
      {
          "img": "4.png",
          "title": "In Forma Pauperis",
          "content": "In The Manner Of A Pauper. Someone Unable To Afford The Costs Associated With A Legal Proceeding. As This Will Not Be A Barrier To Seeking Justice, Such Persons Are Given In Forma Pauperis Status (Usually Abbreviated Ifp), Wherein Most Costs Are Waived Or Substantially Reduced."
      },
      {
          "img": "5.png",
          "title": "In Foro Conscientiae ",
          "content": "In The Forum Of Conscience."
      },
      {
          "img": "6.png",
          "title": "In Futuro",
          "content": "In The Future. Refers To Things To Come, Or Things That May Occur Later But Are Not So Now. As In In Futuro Debts, I.E. Debts Which Become Due And Payable In The Future."
      },
      {
          "img": "7.png",
          "title": "In Haec Verba",
          "content": "In These Words. Used When Including Text In A Complaint Verbatim, Where Its Appearance In That Form Is Germane To The Case, Or Is Required To Be Included."
      },
      {
          "img": "8.png",
          "title": "In Jure Non Remota Causa Sed Proxima Spectatur ",
          "content": "In Law Not The Remote But The Proximate Cause Is Looked At."
      },
      {
          "img": "1.png",
          "title": "In Limine",
          "content": "At The Threshold. A Motion To A Judge In A Case That Is Heard And Considered Outside The Presence Of The Jury."
      },
      {
          "img": "2.png",
          "title": "In Loco Parentis",
          "content": "In The Place Of A Parent. Used To Refer To A Person Or Entity Assuming The Normal Parental Responsibilities For A Minor. This Can Be Used In Transfers Of Legal Guardianship, Or In The Case Of Schools Or Other Institutions That Act In The Place Of The Parents On A Day-To-Day Basis."
      },
      {
          "img": "3.png",
          "title": "In Mitius",
          "content": "In The Milder. A Type Of Retroactive Law That Decriminalizes Offenses Committed In The Past. Also Known As An Amnesty Law."
      },
      {
          "img": "4.png",
          "title": "In Mortua Manu ",
          "content": "In A Dead Hand."
      },
      {
          "img": "5.png",
          "title": "In Novo Casu Novum Remedium Apponendum Est ",
          "content": "In A New Case A New Remedy Is To Be Applied."
      },
      {
          "img": "6.png",
          "title": "In Omni Re Nascitur Res Quae Ipsam Rem Exterminat ",
          "content": "In Everything Is Born That Which Destroys The Thing Itself."
      },
      {
          "img": "7.png",
          "title": "In Omnibus",
          "content": "In All. Used To Mean 'In Every Respect.' Something Applying To Every Aspect Of A Situation."
      },
      {
          "img": "8.png",
          "title": "In Pari Delicto",
          "content": "In Equal Offense. Used When Both Parties To A Case Are Equally At Fault."
      },
      {
          "img": "1.png",
          "title": "In Pari Materia",
          "content": "In The Same Matter. Refers To A Situation Where A Law Or Statute May Be Ambiguous, And Similar Laws Applying To The Matter Are Used To Interpret The Vague One."
      },
      {
          "img": "2.png",
          "title": "In Personam",
          "content": "In Person. Used In The Context Of 'Directed At This Particular Person', Refers To A Judgement Or Subpoena Directed At A Specific Named Individual. Cf. In Rem."
      },
      {
          "img": "3.png",
          "title": "In Pleno",
          "content": "In Full."
      },
      {
          "img": "4.png",
          "title": "In Prope Persona",
          "content": "On One'S Own Person. One Who Represents Themselves In Court Without The [Official] Assistance Of An Attorney."
      },
      {
          "img": "5.png",
          "title": "In Propria Persona",
          "content": "In One'S Own Proper Person. Alternate Form Of In Prope Persona. One Who Represents Themselves In Court Without The [Official] Assistance Of An Attorney."
      },
      {
          "img": "6.png",
          "title": "In Quo Quis Delinquit In Eo De Jure Est Puniendus ",
          "content": "In Whatever Thing One Offends In That He Is To Be Punished According To Law."
      },
      {
          "img": "7.png",
          "title": "In Re",
          "content": "In The Matter [Of]. Used In The Title Of A Decision Or Comment To Identify The Matter They Are Related To; Usually Used For A Case Where The Proceeding Is In Rem Or Quasi In Rem And Not In Personam (E.G. Probate Or Bankrupt Estate, Guardianship, Application For Laying Out A Public Highway) And Occasionally For An Ex Parte Proceeding (E.G. Application For A Writ Of Habeas Corpus)."
      },
      {
          "img": "8.png",
          "title": "In Re Dubia Magis Inficiatio Quam Affirmatio Intelligenda ",
          "content": "In A Doubtful Matter The Negative Is To Be Understood Rather Than The Affirmative."
      },
      {
          "img": "1.png",
          "title": "In Rem",
          "content": "About A Thing. Used In The Context Of A Case Against Property, As Opposed To A Particular Person. See Also In Rem Jurisdiction. Cf. In Personam."
      },
      {
          "img": "2.png",
          "title": "In Republica Maxime Conservanda Sunt Jura Belli ",
          "content": "In A State The Laws Of War Are To Be Especially Observed."
      },
      {
          "img": "3.png",
          "title": "In Situ",
          "content": "In Position. Often Used In The Context Of Decisions Or Rulings About A Property Or Thing 'Left In Place' After The Case As It Was Before."
      },
      {
          "img": "4.png",
          "title": "In Solidum",
          "content": "For The Whole. Jointly And Severally; Where A Group Of Persons Share Liability For A Debt, Such As Co-Signers To A Loan, The Debtor Can Sue A Single Party In Solidum, That Is, To Recover The Entire Amount Owed."
      },
      {
          "img": "5.png",
          "title": "In Terrorem",
          "content": "In Order To Frighten. A Warning Or Threat To Sue, Made In The Hopes Of Convincing The Other Party To Take Action To Avoid A Lawsuit."
      },
      {
          "img": "6.png",
          "title": "In Terrorem Clause",
          "content": "Clause 'In Order To Frighten'. A Clause In A Will That Threatens Any Party Who Contests The Will With Being Disinherited. Also Called A No-Contest Clause."
      },
      {
          "img": "7.png",
          "title": "In Testamentis Plenius Testatoris Intentionem Scrutamur ",
          "content": "In Wills We Seek Diligently The Intention Of The Testator."
      },
      {
          "img": "8.png",
          "title": "In Toto",
          "content": "In Total."
      },
      {
          "img": "1.png",
          "title": "In Traditionibus Scriptorum Non Quod Dictum Est, Sed Quod Gestum Est, Inspicitur ",
          "content": "In The Delivery Of Writings (Deeds), Not What Is Said But What Is Done Is To Be Considered."
      },
      {
          "img": "2.png",
          "title": "In Verbis, Non Verba Sed Res Et Ratio Quaerenda Est ",
          "content": "In Words, Not Words, But The Thing And The Meaning Are To Be Inquired Into."
      },
      {
          "img": "3.png",
          "title": "Indicia",
          "content": "Indications. Often Used In Copyright Notices. Refers To Distinctive Markings That Identify A Piece Of Intellectual Property."
      },
      {
          "img": "4.png",
          "title": "Infra",
          "content": "Below Or Under."
      },
      {
          "img": "5.png",
          "title": "Injuria Non Excusat Injuriam ",
          "content": "A Wrong Does Not Excuse A Wrong."
      },
      {
          "img": "6.png",
          "title": "Innuendo",
          "content": "By Nodding. An Intimation About Someone Or Something, Made Indirectly Or Vaguely Suggesting The Thing Being Implied. Often Used When The Implied Thing Is Negative Or Derogatory."
      },
      {
          "img": "7.png",
          "title": "Intentio Inservire Debet Legibus, Non Leges Intentioni ",
          "content": "Intention Ought To Be Subservient To The Laws, Not The Laws To The Intention."
      },
      {
          "img": "8.png",
          "title": "Inter Alia",
          "content": "Among Others. Used To Indicate An Item Cited Has Been Pulled From A Larger Or More Complete List."
      },
      {
          "img": "1.png",
          "title": "Inter Arma Enim Silent Leges",
          "content": "For Among Arms, The Laws Fall Silent. A Concept That During War, Many Illegal Activities Occur. Also Taken To Mean That In Times Of War, Laws Are Suppressed, Ostensibly For The Good Of The Country."
      },
      {
          "img": "2.png",
          "title": "Inter Rusticos",
          "content": "Among Rustics. Refers To Contract, Debts, Or Other Agreements Made Between Parties Who Are Not Legal Professionals."
      },
      {
          "img": "3.png",
          "title": "Inter Se",
          "content": "Amongst Themselves. Refers To Obligations Between Members Of The Same Group Or Party, Differentiated From The Whole Party'S Obligations To Another Party."
      },
      {
          "img": "4.png",
          "title": "Inter Vivos",
          "content": "Between The Living. Refers To A Gift Or Other Non-Sale Transfer Between Living Parties. This Is In Contrast To A Will, Where The Transfer Takes Effect Upon One Party'S Death."
      },
      {
          "img": "5.png",
          "title": "Interest Reipublicae Res Judicatas Non Rescindi ",
          "content": "It Is In The Interest Of The State That Things Adjudged Be Not Rescinded."
      },
      {
          "img": "6.png",
          "title": "Interest Reipublicae Suprema Hominum Testamenta Rata Haberi ",
          "content": "It Is In The Interest Of The State That Men S Last Wills Be Sustained."
      },
      {
          "img": "7.png",
          "title": "Interest Reipublicae Ut Quilibet Re Sua Bene Utatur ",
          "content": "It Is In The Interest Of The State That Every One Use Properly His Own Property."
      },
      {
          "img": "8.png",
          "title": "Interest Reipublicase Ut Sit Finis Litium ",
          "content": "It Is In The Interest Of The State That There Be An End To Litigation."
      },
      {
          "img": "1.png",
          "title": "Interim ",
          "content": "Temporary, In The Meanwhile."
      },
      {
          "img": "2.png",
          "title": "Interpretare Et Concordare Leges Legibus Est Optimus Interpretandi Modus ",
          "content": "To Interpret And Harmonize Laws Is The Best Method Of Interpretation."
      },
      {
          "img": "3.png",
          "title": "Interpretatio Fienda Est Ut Res Magis Valeat Quam Pereat ",
          "content": "Such A Construction Is To Be Made That The Thing May Have Effect Rather Than It Should Fail."
      },
      {
          "img": "4.png",
          "title": "Interruptio Multiplex Non Tollit Praescriptionem Semel Obtentam ",
          "content": "Repeated Interruption Does Not Defeat A Prescription Once Obtained."
      },
      {
          "img": "5.png",
          "title": "Intra",
          "content": "Within."
      },
      {
          "img": "6.png",
          "title": "Intra Fauces Terrae",
          "content": "Within The Jaws Of The Land. This Term Refers To A Nation'S Territorial Waters."
      },
      {
          "img": "7.png",
          "title": "Intra Legem",
          "content": "Within The Law. Used In Various Contexts To Refer To The Legal Foundation For A Thing."
      },
      {
          "img": "8.png",
          "title": "Intra Vires",
          "content": "Within The Powers. Something Done Which Requires Legal Authority, And The Act Is Performed Accordingly. Cf. Ultra Vires."
      },
      {
          "img": "1.png",
          "title": "Invito Beneficium Non Datur ",
          "content": "A Benefit Is Not Conferred Upon One Against His Consent."
      },
      {
          "img": "2.png",
          "title": "Ipse Dixit",
          "content": "He Himself Said It. An Assertion Given Undue Weight Solely By Virtue Of The Person Making The Assertion."
      },
      {
          "img": "3.png",
          "title": "Ipsissima Verba",
          "content": "The Very Words. Referring To A Document Or Ruling That Is Being Quoted By Another."
      },
      {
          "img": "4.png",
          "title": "Ipso Facto",
          "content": "By The Fact Itself. Used In The Context That One Event Is A Direct And Immediate Consequence Of Another. 'In And Of Itself.'"
      },
      {
          "img": "5.png",
          "title": "Ipso Jure",
          "content": "The Law Itself. By Operation Of Law."
      },
      {
          "img": "6.png",
          "title": "Ira Furor Brevis Est ",
          "content": "Anger Is Brief Insanity."
      },
      {
          "img": "7.png",
          "title": "Iter Arma Leges Silent ",
          "content": "In War The Laws Are Silent."
      },
      {
          "img": "8.png",
          "title": "Judex Non Calculat",
          "content": "The Judge Does Not Calculate. A Principle That Calculation Errors Made By The Court Do Not Invalidate The Judgement On A Technicality. Also Taken To Mean That The Judge Does Not Tally Up The Arguments Of Both Sides And Decide In Favor Of The More Numerous, But Rather Weighs All Of The Evidence Without Regard To The Number Of Arguments Made."
      },
      {
          "img": "1.png",
          "title": "Judex Est Lex Loquens ",
          "content": "A Judge Is The Law Speaking."
      },
      {
          "img": "2.png",
          "title": "Judex Non Potest Esse Testis In Propira Causa ",
          "content": "A Judge Cannot Be Witness In His Own Cause."
      },
      {
          "img": "3.png",
          "title": "Judex Non Potest Injuriam Sibi Datam Punire ",
          "content": "A Judge Cannon Punish A Wrong Done To Himself."
      },
      {
          "img": "4.png",
          "title": "Judex Non Reddit Plus Quam Quod Petens Ipse Requirit ",
          "content": "A Judge Does Not Give More Than The Plaintiff Himself Demands."
      },
      {
          "img": "5.png",
          "title": "Judiciis Posterioribus Fides Est Adhibenda ",
          "content": "Faith Must Be Given To Later Decisions."
      },
      {
          "img": "6.png",
          "title": "Judicis Est Judicare Secundum Allegata Et Probata ",
          "content": "It Is The Duty Of A Judge To Decide According To The Allegations And The Proofs."
      },
      {
          "img": "7.png",
          "title": "Judicium Non Debet Esse Illusorium, Suum Effectum Habere Debet ",
          "content": "A Judgment Ought Not To Be Illusory; It Ought To Have Its Proper Effect."
      },
      {
          "img": "8.png",
          "title": "Juduces Non Tenentur Exprimere Causam Sententiae Suae ",
          "content": "Judges Are Not Bound To Explain The Reason Of Their Judgment."
      },
      {
          "img": "1.png",
          "title": "Jura Naturae Sunt Immutabilia ",
          "content": "The Laws Of Nature Are Immutable."
      },
      {
          "img": "2.png",
          "title": "Jura Novit Curia",
          "content": "The Court Knows The Law. Concept That Parties To A Case Do Not Need To Define How The Law Applies To Their Case. The Court Is Solely Responsible For Determining What Laws Apply."
      },
      {
          "img": "3.png",
          "title": "Jura Publica Anteferenda Privatis Juribus ",
          "content": "Public Rights Are To Be Preferred To Private Rights."
      },
      {
          "img": "4.png",
          "title": "Juramentum Est Indivisibile Et Non Est Admittendum In Parte Verum Et In Parte Falsum ",
          "content": "An Oath Is Indivisible And It Is Not To Be Held Partly True And Partly False."
      },
      {
          "img": "5.png",
          "title": "Jurare Est Deum In Testem Vocare, Et Est Actus Divini Cultus ",
          "content": "To Swear Is To Call God To Witness And Is An Act Of Divine Worship."
      },
      {
          "img": "6.png",
          "title": "Jurat",
          "content": "(He) Swears. Appears At The End Of An Affidavit, Where The Party Making The Affirmation Signs The Oath, And The Information On Whom The Oath Was Sworn Before Is Placed."
      },
      {
          "img": "7.png",
          "title": "Juris Et De Jure",
          "content": "Of Law, And From Law. Irrebuttable Or Conclusive Presumptions Of Law. One Cannot Argue Against, Or Try To Otherwise Refute These."
      },
      {
          "img": "8.png",
          "title": "Jus",
          "content": "Law, Right. Essentially: Law."
      },
      {
          "img": "1.png",
          "title": "Jus Accrescendi",
          "content": "Right Of Survivorship; Right Of Accrual. (1) Right Of Survivorship: In Property Law, On The Death Of One Joint Tenant, That Tenant'S Interest Passes Automatically To The Surviving Tenant(S) To Hold Jointly Until The Estate Is Held By A Sole Tenant. The Only Way To Defeat The Right Of Survivorship Is To Sever The Joint Tenancy During The Lifetime Of The Parties, The Right Of Survivorshop Takes Priority Over A Will Or Interstate Accession Rules. (2) (Civil Law) Right Of Accrual: Right Of The Beneficiary To Succeed Proportionately To A Benefit That Another Beneficiary In The Same Will Cannot Or Does Not Want To Take."
      },
      {
          "img": "2.png",
          "title": "Jus Accrescendi Praefertur Oneribus ",
          "content": "The Right Of Survivorship Is Preferred To Incumbrances."
      },
      {
          "img": "3.png",
          "title": "Jus Ad Bellum",
          "content": "Laws To War. Refers To Legalities Considered Before Entering Into A War, To Ensure It Is Legal To Go To War Initially. Not To Be Confused With Ius In Bello (Q.V.), The 'Laws Of War' Concerning How War Is Carried Out."
      },
      {
          "img": "4.png",
          "title": "Jus Ad Rem; Jus In Re ",
          "content": "A Right To A Thing; A Right In A Thing."
      },
      {
          "img": "5.png",
          "title": "Jus Civile",
          "content": "Civil Law. A Codified Set Of Laws Concerning Citizenry, And How The Laws Apply To Them."
      },
      {
          "img": "6.png",
          "title": "Jus Cogens",
          "content": "Compelling Law. Internationally Agreed Laws That Bear No Deviation, And Do Not Require Treaties To Be In Effect. An Example Is Law Prohibiting Genocide."
      },
      {
          "img": "7.png",
          "title": "Jus Commune",
          "content": "Common Law. Not Actually Referring To Common Law, This Term Refers To Common Doctrine And Principles Of Civil Law That Underlie All Aspects Of The Legal System."
      },
      {
          "img": "8.png",
          "title": "Jus Dicere, Non Jus Dare ",
          "content": "To Declare The Law, Not To Make The Law."
      },
      {
          "img": "1.png",
          "title": "Jus Est Norma Recti; Et Quicquid Est Contra Normam Recti Est Injuria ",
          "content": "The Law Is A Rule Of Right; And Whatever Is Contrary To A Rule Of Right Is An Injury."
      },
      {
          "img": "2.png",
          "title": "Jus Gentium",
          "content": "Law Of Nations. Customary Law Followed By All Nations. Nations Being At Peace With One Another, Without Having To Have An Actual Peace Treaty In Force, Would Be An Example Of This Concept."
      },
      {
          "img": "3.png",
          "title": "Jus In Bello",
          "content": "Law In War. Laws Governing The Conduct Of Parties In War."
      },
      {
          "img": "4.png",
          "title": "Jus Inter Gentes",
          "content": "Law Between The Peoples. Laws Governing Treaties And International Agreements."
      },
      {
          "img": "5.png",
          "title": "Jus Naturale",
          "content": "Natural Law. Laws Common To All People, That The Average Person Would Find Reasonable, Regardless Of Their Nationality."
      },
      {
          "img": "6.png",
          "title": "Jus Naturale Est Quod Apud Omnes Homines Eandem Habet Potentiam ",
          "content": "Natural Right Is That Which Has The Same Force Among All Men."
      },
      {
          "img": "7.png",
          "title": "Jus Primae Noctis",
          "content": "Right Of The First Night. Supposed Right Of The Lord Of An Estate To Take The Virginity Of Women In His Estate On Their Wedding Night."
      },
      {
          "img": "8.png",
          "title": "Jus Quaesitum Tertio",
          "content": "Right To Third-Party Relief. Right Of A Third-Party Beneficiary To Sue In Order To Enforce A Third-Party Contract (I.E., The Opposite Of Privity Of Contract)."
      },
      {
          "img": "1.png",
          "title": "Jus Sanguinis",
          "content": "Right Of Blood. Social Law Concept Wherein Citizenship Of A Nation Is Determined By Having One Or Both Parents Being Citizens."
      },
      {
          "img": "2.png",
          "title": "Jus Scriptum Aut Non Scriptum ",
          "content": "The Written Law Or The Unwritten Law."
      },
      {
          "img": "3.png",
          "title": "Jus Soli",
          "content": "Right Of Soil. Social Law Concept Wherein Citizenship Of A Nation Is Determined By Place Of Birth."
      },
      {
          "img": "4.png",
          "title": "Jus Tertii",
          "content": "Law Of The Third. Arguments Made By A Third Party In Disputes Over Possession, The Intent Of Which Is To Question One Of The Principal Parties' Claims Of Ownership Or Rights To Ownership."
      },
      {
          "img": "5.png",
          "title": "Jusjurandum Inter Alios Factum Nec Nocere Nec Prodesse Debet ",
          "content": "An Oath Made Between Third Parties Ought Neither To Hurt Nor Profit."
      },
      {
          "img": "6.png",
          "title": "Justitia Est Duplec; Severe Puniens Et Vere Praeveniens ",
          "content": "Justice Is Two. Fold; Severely Punishing And In Reality Prohibiting (Offences)."
      },
      {
          "img": "7.png",
          "title": "Justitia Firmatur Solium ",
          "content": "The Throne Is Established By Justice."
      },
      {
          "img": "8.png",
          "title": "Justitia Nemini Neganda Est ",
          "content": "Justice Is To Be Denied To No One."
      },
      {
          "img": "1.png",
          "title": "Lacunae",
          "content": "Void, Gap. A Situation Arising That Is Not Covered By Any Law. Generally Used In International Law, As All Countries Codify According To Their Own Systems Of Law."
      },
      {
          "img": "2.png",
          "title": "Leges Humanae Nascuntur, Vivunt, Moriuntur",
          "content": "The Laws Of Man Are Born, Live, And Die. Illustrates That Laws Are Made, Are In Force For A Period, And Then Become Obsolete."
      },
      {
          "img": "3.png",
          "title": "Leges Posteriores Priores Contrarias Abrogant ",
          "content": "Subsequent Laws Repeal Prior Conflicting Ones."
      },
      {
          "img": "4.png",
          "title": "Legibus Sumptis Desinentibus Legibus Naturae Utendum Est ",
          "content": "When Laws Imposed By The State Fail, We Must Use The Laws Of Nature."
      },
      {
          "img": "5.png",
          "title": "Lex Aliquando Sequitur Aequitatem ",
          "content": "The Law Sometimes Follows Equity."
      },
      {
          "img": "6.png",
          "title": "Lex Citius Tolerare Vult Privatum Damnum Quam Publicum Malum ",
          "content": "The Law Would Rather Tolerate A Private Injury Than A Public Evil."
      },
      {
          "img": "7.png",
          "title": "Lex Commissoria",
          "content": "Forfeiture Clause For Nonperformance Of A Contract, Especially (1) A Provision That A Pledge Shall Be Forfeited If A Loan Is Defaulted, Or (2) A Condition That Money Paid On A Contract Of Sale Shall Be Forfeited And The Sale Rescinded If Outstanding Payments Are Defaulted. Also Known As A Pactum Commissorium."
      },
      {
          "img": "8.png",
          "title": "Lex Communis",
          "content": "Common Law. Alternate Form Of Jus Commune. Refers To Common Facets Of Civil Law That Underlie All Aspects Of The Law."
      },
      {
          "img": "1.png",
          "title": "Lex Dabit Remedium ",
          "content": "The Law Will Give A Remedy."
      },
      {
          "img": "2.png",
          "title": "Lex Dilationes Abhorret ",
          "content": "The Law Abhors Delays."
      },
      {
          "img": "3.png",
          "title": "Lex Est Judicum Tutissimus Ductor ",
          "content": "The Law Is The Safest Guide For Judges."
      },
      {
          "img": "4.png",
          "title": "Lex Est Sanctio Sancta Jubens Honesta Et Prohibens Contraria ",
          "content": "The Law Is A Sacred Sanction, Commanding What Is Right And Prohibiting The Contrary."
      },
      {
          "img": "5.png",
          "title": "Lex Indendit Vicinum Vicini Facta Scire ",
          "content": "The Law Presumes That One Neighbor Knows The Acts Of Another."
      },
      {
          "img": "6.png",
          "title": "Lex Lata",
          "content": "The Law Borne. The Law As It Has Been Enacted."
      },
      {
          "img": "7.png",
          "title": "Lex Loci",
          "content": "The Law Of The Place. The Law Of The Country, State, Or Locality Where The Matter Under Litigation Took Place. Usually Used In Contract Law, To Determine Which Laws Govern The Contract."
      },
      {
          "img": "8.png",
          "title": "Lex Necessitatis Est Lex Temporis I.E. Instantis ",
          "content": "The Law Of Necessity Is The Law Of Time, That Is Time Present."
      },
      {
          "img": "1.png",
          "title": "Lex Neminem Cogit Ad Vana Seu Impossiblia ",
          "content": "The Law Compels No One To Do Vain Or Impossible Things."
      },
      {
          "img": "2.png",
          "title": "Lex Nil Frustra Facit ",
          "content": "The Law Does Nothing In Vain."
      },
      {
          "img": "3.png",
          "title": "Lex Non A Rege Est Violanda ",
          "content": "The Law Must Not Be Violated Even By The King."
      },
      {
          "img": "4.png",
          "title": "Lex Non Deficere Potest In Justitia Exhibenda ",
          "content": "The Law Cannot Fail In Dispensing Justice."
      },
      {
          "img": "5.png",
          "title": "Lex Non Favet Delicatorum Votis ",
          "content": "The Law Does Not Favor The Wishes Of The Dainty."
      },
      {
          "img": "6.png",
          "title": "Lex Non Novit Patrem, Nec Matrem; Solam Veritatem ",
          "content": "The Law Does Not Know Neither Father Nor Mother, Only The Truth."
      },
      {
          "img": "7.png",
          "title": "Lex Non Oritur Ex Injuria ",
          "content": "The Law Does Not Arise From A Mere Injury."
      },
      {
          "img": "8.png",
          "title": "Lex Non Requirit Verificari Quod Apparet Curiae ",
          "content": "The Law Does Not Require That To Be Proved Which Is Apparent To The Court."
      },
      {
          "img": "1.png",
          "title": "Lex Plus Laudatur Quando Ratione Probatur ",
          "content": "The Law Is The More Praised When It Is Supported By Reason."
      },
      {
          "img": "2.png",
          "title": "Lex Posterior Derogat Priori",
          "content": "Later Law Removes The Earlier. More Recent Law Overrules Older Ones On The Same Matter."
      },
      {
          "img": "3.png",
          "title": "Lex Prospicit Not Respicit ",
          "content": "The Law Looks Forwared, Not Backward."
      },
      {
          "img": "4.png",
          "title": "Lex Punit Mendaciam ",
          "content": "The Law Punishes Falsehood."
      },
      {
          "img": "5.png",
          "title": "Lex Rejicit Superflua, Pugnatia, Incongrua ",
          "content": "The Law Rejects Superfluous, Contradictory And Incongruous Things."
      },
      {
          "img": "6.png",
          "title": "Lex Retro Non Agit",
          "content": "The Law Does Not Operate Retroactively. A Law Cannot Make Something Illegal That Was Legal At The Time It Was Performed. See Ex Post Facto Law."
      },
      {
          "img": "7.png",
          "title": "Lex Scripta",
          "content": "Written Law. Law That Specifically Codifies Something, As Opposed To Common Law Or Customary Law."
      },
      {
          "img": "8.png",
          "title": "Lex Specialis Derogat Legi Generali",
          "content": "Specific Law Takes Away From The General Law. Where Several Laws Apply To The Same Situation, The More Specific One(S) Take Precedence Over More General Ones."
      },
      {
          "img": "1.png",
          "title": "Lex Spectat Naturae Ordinem ",
          "content": "The Law Regards The Order Of Nature."
      },
      {
          "img": "2.png",
          "title": "Lex Succurrit Ignoranti ",
          "content": "The Law Succors The Ignorant."
      },
      {
          "img": "3.png",
          "title": "Lex Tutissima Cassis, Sub Clypeo Legis Nemo Decipitur ",
          "content": "Law Is The Safest Helmet; Under The Shield Of The Law No One Is Deceived."
      },
      {
          "img": "4.png",
          "title": "Lex Uno Ore Omnes Alloquitur ",
          "content": "The Law Speaks To All Through One Mouth."
      },
      {
          "img": "5.png",
          "title": "Liberum Veto",
          "content": "Free Veto. An Aspect Of A Unanimous Voting System, Whereby Any Member Can End Discussion On A Proposed Law."
      },
      {
          "img": "6.png",
          "title": "Lingua Franca",
          "content": "The Frankish Language. A Language Common To An Area That Is Spoken By All, Even If Not Their Mother Tongue. Term Derives From The Name Given To A Common Language Used By Traders In The Mediterranean Basin Dating From The Middle Ages."
      },
      {
          "img": "7.png",
          "title": "Lis Alibi Pendens",
          "content": "Lawsuit Elsewhere Pending. Refers To Requesting A Legal Dispute Be Heard That Is Also Being Heard By Another Court. To Avoid Possibly Contradictory Judgements, This Request Will Not Be Granted."
      },
      {
          "img": "8.png",
          "title": "Lis Pendens",
          "content": "Suit Pending. Often Used In The Context Of Public Announcements Of Legal Proceedings To Come. Compare Pendente Lite (Below)."
      },
      {
          "img": "1.png",
          "title": "Locus",
          "content": "Place."
      },
      {
          "img": "2.png",
          "title": "Locus Delicti",
          "content": "Place Of The Crime. Shorthand Version Of Lex Locus Delcti Commissi. The 'Scene Of The Crime'."
      },
      {
          "img": "3.png",
          "title": "Locus In Quo",
          "content": "The Place In Which. The Location Where A Cause Of Action Arose."
      },
      {
          "img": "4.png",
          "title": "Locus Poenitentiae",
          "content": "Place Of Repentance. When One Party Withdraws From A Contract Before All Parties Are Bound."
      },
      {
          "img": "5.png",
          "title": "Locus Standi",
          "content": "Place Of Standing. The Right Of A Party To Appear And Be Heard Before A Court."
      },
      {
          "img": "6.png",
          "title": "Longa Possessio Est Pacis Jus ",
          "content": "Long Possession Is The Law Of Peace."
      },
      {
          "img": "7.png",
          "title": "Longa Possessio Parit Jus Possidendi Et Tollit Actionem Vero Domino ",
          "content": "Long Possession Produces The Right Of Possession And Takes Away From The True Owner His Action."
      },
      {
          "img": "8.png",
          "title": "Magister Rerum Usus; Magistra Rerum Experientia ",
          "content": "Use Is The Master Of Things; Experience Is The Mistress Of Things."
      },
      {
          "img": "1.png",
          "title": "Major Continet In Se Minus ",
          "content": "The Greater Contains The Less."
      },
      {
          "img": "2.png",
          "title": "Majus Est Delictum Se Ipsum Occidere Quam Alium ",
          "content": "It Is A Greater Crime To Kill One S Self Than Another."
      },
      {
          "img": "3.png",
          "title": "Mala Fide",
          "content": "(In) Bad Faith. A Condition Of Being Fraudulent Or Deceptive In Act Or Belief."
      },
      {
          "img": "4.png",
          "title": "Mala Grammatica Non Vitiat Chartam ",
          "content": "Bad Grammar Does Not Vitiate A Deed."
      },
      {
          "img": "5.png",
          "title": "Mala In Se ",
          "content": "Bad In Themselves."
      },
      {
          "img": "6.png",
          "title": "Mala Prohibita ",
          "content": "Crimes Prohibited."
      },
      {
          "img": "7.png",
          "title": "Maleficia Propositis Distinguuntur",
          "content": "Evil Acts Are Distinguished From (Evil) Purposes/Crimes Are Distinguished By Evil Intent. Evil Acts Are Distinguished From Evil Purposes Crimes Are Distinguished By The Intention"
      },
      {
          "img": "8.png",
          "title": "Malitia Supplet Aesatem ",
          "content": "Malice Supplies Age."
      },
      {
          "img": "1.png",
          "title": "Malo Animo ",
          "content": "With Evil Intent."
      },
      {
          "img": "2.png",
          "title": "Malum In Se",
          "content": "Wrong In Itself. Something Considered A Universal Wrong Or Evil, Regardless Of The System Of Laws In Effect."
      },
      {
          "img": "3.png",
          "title": "Malum Prohibitum",
          "content": "Prohibited Wrong. Something Wrong Or Illegal By Virtue Of It Being Expressly Prohibited, That Might Not Otherwise Be So."
      },
      {
          "img": "4.png",
          "title": "Mandamus",
          "content": "We Command. A Writ Issue By A Higher Court To A Lower One, Ordering That Court Or Related Officials To Perform Some Administrative Duty. Often Used In The Context Of Legal Oversight Of Government Agencies."
      },
      {
          "img": "5.png",
          "title": "Mare Clausum",
          "content": "Closed Sea. A Body Of Water Under The Jurisdiction Of A State Or Nation, To Which Access Is Not Permitted, Or Is Tightly Regulated."
      },
      {
          "img": "6.png",
          "title": "Mare Liberum",
          "content": "Open Sea. A Body Of Water Open To All. Typically A Synonym For International Waters, Or In Other Legal Parlance, The 'High Seas'."
      },
      {
          "img": "7.png",
          "title": "Maximus Magister Erroris Populus Est ",
          "content": "The People Are The Greatest Master Of Error."
      },
      {
          "img": "8.png",
          "title": "Melior Est Conditio Possidentis, Ubi Neuter Jus Habet ",
          "content": "Better Is The Condition Of The Possessor Where Neither Of The Two Has The Right."
      },
      {
          "img": "1.png",
          "title": "Melior Testatoris In Testamentis Spectanda Est ",
          "content": "In Wills The Intention Of A Testator Is To Be Regarded."
      },
      {
          "img": "2.png",
          "title": "Meliorem Conditionem Suam Facere Potest Minor Deteriorem Nequaquam ",
          "content": "A Minor Can Make His Position Better, Never Worse."
      },
      {
          "img": "3.png",
          "title": "Mens Rea",
          "content": "Guilty Mind. One Of The Requirements For A Crime To Be Committed, The Other Being Actus Reus, The Guilt Act. This Essentially Is The Basis For The Notion That Those Without Sufficient Mental Capability Cannot Be Judged Guilty Of A Crime."
      },
      {
          "img": "4.png",
          "title": "Mentiri Est Contra Mentem Ire ",
          "content": "To Lie Is To Act Against The Mind."
      },
      {
          "img": "5.png",
          "title": "Merito Beneficium Legis Amittit, Qui Legem Ipsam Subvertere Intendit ",
          "content": "He Justly Loses The Benefit Of The Law Who Seeks To Infringe The Law."
      },
      {
          "img": "6.png",
          "title": "Minatur Innocentibus Qui Parcit Nocentibus ",
          "content": "He Threatens The Innocent Who Spares The Guilty."
      },
      {
          "img": "7.png",
          "title": "Misera Est Servitus, Ubi Jus Est Vagum Aut Incertum ",
          "content": "It Is A Miserable Slavery Where The Law Is Vague Or Uncertain."
      },
      {
          "img": "8.png",
          "title": "Modus Operandi",
          "content": "Manner Of Operation. A Person'S Particular Way Of Doing Things. Used When Using Behavioral Analysis While Investigating A Crime. Often Abbreviated 'M.O.'"
      },
      {
          "img": "1.png",
          "title": "Mora Accipiendi",
          "content": "Delay Of Creditor. Delay In Payment Or Performance In The Part Of The Creditor Or Obligor."
      },
      {
          "img": "2.png",
          "title": "Mora Solvendi",
          "content": "Delay Of Debtor. Delay In Payment Or Performance In The Part Of The Debtor Or The Obligee."
      },
      {
          "img": "3.png",
          "title": "Mors Dicitur Ultimum Supplicium ",
          "content": "Death Is Called The Extreme Penalty."
      },
      {
          "img": "4.png",
          "title": "Mortis Causa",
          "content": "In Contemplation Of Death. Gift Or Trust That Is Made In Contemplation Of Death."
      },
      {
          "img": "5.png",
          "title": "Mos Pro Lege",
          "content": "Custom For Law. That Which Is The Usual Custom Has The Force Of Law."
      },
      {
          "img": "6.png",
          "title": "Motion In Limine",
          "content": "Motion At The Start. Motions Offered At The Start Of A Trial, Often To Suppress Or Pre-Allow Certain Evidence Or Testimony."
      },
      {
          "img": "7.png",
          "title": "Muilta Exercitatione Facilius Quam Regulis Percipies ",
          "content": "You Will Perceive Many Things More Easily By Experience Than By Rules."
      },
      {
          "img": "8.png",
          "title": "Mutatis Mutandis",
          "content": "Having Changed [The Things That] Needed To Be Changed. A Caution To A Reader When Using One Example To Illustrate A Related But Slightly Different Situation. The Caution Is That The Reader Must Adapt The Example To Change What Is Needed For It To Apply To The New Situation."
      },
      {
          "img": "1.png",
          "title": "Nam Nemo Haeres Viventis ",
          "content": "For No One Is An Heir Of A Living Person."
      },
      {
          "img": "2.png",
          "title": "Naturae Vis Maxima Est ",
          "content": "The Force Of Nature Is The Greatest."
      },
      {
          "img": "3.png",
          "title": "Ne Exeat",
          "content": "Let Him Not Exit [The Republic]. Shortened Version Of Ne Exeat Repiblica: 'Let Him Not Exit The Republic'. A Writ To Prevent One Party To A Dispute From Leaving (Or Being Taken) From The Court'S Jurisdiction."
      },
      {
          "img": "4.png",
          "title": "Necessitas Inducit Privilegium Quoad Jura Privata ",
          "content": "With Respect To Private Rights Necessity Induces Privilege."
      },
      {
          "img": "5.png",
          "title": "Necessitas Non Habet Legem ",
          "content": "Necessity Has No Law."
      },
      {
          "img": "6.png",
          "title": "Necessitas Publica Est Major Quam Privata ",
          "content": "Public Necessity Is Greater Than Private Necessity."
      },
      {
          "img": "7.png",
          "title": "Negligentia Semper Habet Infortuniam Comitem ",
          "content": "Negligence Always Has Misfortune For A Companion."
      },
      {
          "img": "8.png",
          "title": "Negotiorum Gestio",
          "content": "Management Of Estate. Quasi-Contractual Obligation Arising From Good Works Affecting Other People, Obliging The Benefited Party (Dominus Negotii) To Reimburse The Gestor For The Cost That Was Used In Doing Good Works."
      },
      {
          "img": "1.png",
          "title": "Nemo Admittendus Est Inhabilitare Se Ipsum ",
          "content": "No One Is Allowed To Incapacitate Himself."
      },
      {
          "img": "2.png",
          "title": "Nemo Auditur Propriam Turpitudinem Allegans",
          "content": "No One Can Be Heard, Who Invokes His Own Guilt. Nobody Can Bring A Case That Stems From Their Own Illegal Act."
      },
      {
          "img": "3.png",
          "title": "Nemo Bis Punitur Pro Eodem Delicto ",
          "content": "No One Can Be Twice Punished For The Same Offence."
      },
      {
          "img": "4.png",
          "title": "Nemo Cogitur Suam Rem Vendere, Etiam Justo Pretio ",
          "content": "No One Is Bound To Sell His Own Property, Even For A Just Price."
      },
      {
          "img": "5.png",
          "title": "Nemo Contra Factum Suum Venire Potest ",
          "content": "No Man Can Contradict His Own Deed."
      },
      {
          "img": "6.png",
          "title": "Nemo Dat Quod Non Habet",
          "content": "No One Gives What He Does Not Have. If Someone Purchases Something That The Seller Has No Right To (Such As Stolen Property), The Purchaser Will Likewise Have No Legal Claim To The Thing Bought."
      },
      {
          "img": "7.png",
          "title": "Nemo Debet Esse Iudex In Propria",
          "content": "No One Shall Be A Judge In His Own Case. In The Past It Was Thought That It Included Just Two Rules Namely (1) Nemo Debet Esse Judex In Propria Causa (No One Shall Be A Judge In His Own Case)[Clarification Needed]"
      },
      {
          "img": "8.png",
          "title": "Nemo Ius Ignoratur Censetur",
          "content": "Not Knowing The Law Is Harmful. Everyone Should Know The Law. This Is Used In European Law-Countries With A History Of Roman Law, The 'Sentence' Was First Made By Aristotle."
      },
      {
          "img": "1.png",
          "title": "Nemo Judex In Sua Causa",
          "content": "No One Shall Be A Judge In His Own Case. Prevents Conflict Of Interest In Courts. Often Invoked When There Is Really No Conflict, But When There Is Even The Appearance Of One."
      },
      {
          "img": "2.png",
          "title": "Nemo Plus Juris Ad Alium Transferre Potest Quam Ipse Habet",
          "content": "No One Can Transfer A Greater Right Than He Himself Has. A Purchaser Of Stolen Goods Will Not Become The Rightful Owner Thereof, Since The Seller Himself Was Not The Owner To Begin With."
      },
      {
          "img": "3.png",
          "title": "Nemo Potest Contra Recordum Verificare Per Patriam ",
          "content": "No One Can Verify By The Country, That Is, Through A Jury, Against The Record."
      },
      {
          "img": "4.png",
          "title": "Nemo Potest Esse Tenens Et Dominus ",
          "content": "No One Can At The Same Time Be A Tenant And A Landlord (Of The Same Tenement)."
      },
      {
          "img": "5.png",
          "title": "Nemo Potest Facere Per Alium, Quod Per Se Non Potest ",
          "content": "No One Can Do Through Another What He Cannot Do Himself."
      },
      {
          "img": "6.png",
          "title": "Nemo Potest Mutare Consilium Suum In Alterius Injuriam ",
          "content": "No One Can Change His Purpose To The Injury Of Another."
      },
      {
          "img": "7.png",
          "title": "Nemo Praesumitur Esse Immemor Suae Aeternae Salutis Et Maxime In Articulo Mortis ",
          "content": "No One Is Presumed To Be Forgetful Of His Eternal Welfare, And Particularly In The Hour Of Death."
      },
      {
          "img": "8.png",
          "title": "Nemo Prohibetur Pluribus Defensionibus Uti ",
          "content": "No One Is Forbidden To Make Use Of Several Defences."
      },
      {
          "img": "1.png",
          "title": "Nemo Punitur Pro Alieno Delicto ",
          "content": "No One Is Punished For The Crime Of Another."
      },
      {
          "img": "2.png",
          "title": "Nemo Se Accusare Debet, Nisi Coram Deo ",
          "content": "No One Should Accuse Himself Except In The Presence Of God."
      },
      {
          "img": "3.png",
          "title": "Nemo Tenetur Accusare Se Ipsum Nisi Coram Deo ",
          "content": "No One Is Bound To Accuse Himself Except In The Presence Of God."
      },
      {
          "img": "4.png",
          "title": "Nemo Tenetur Armare Adversarium Contra Se ",
          "content": "No One Is Bound To Arm His Adversary Against Himself."
      },
      {
          "img": "5.png",
          "title": "Nexus ",
          "content": "Connection."
      },
      {
          "img": "6.png",
          "title": "Nihil Dicit",
          "content": "He Says Nothing. A Judgement Rendered In The Absence Of A Plea, Or In The Event One Party Refuses To Cooperate In The Proceedings."
      },
      {
          "img": "7.png",
          "title": "Nihil Quod Est Inconveniens Est Licitum ",
          "content": "Nothing Inconvenient Is Lawful."
      },
      {
          "img": "8.png",
          "title": "Nil Facit Error Nominis Cum De Corpore Constat ",
          "content": "An Error Of Name Makes Not Difference When It Appears From The Body Of The Instrument."
      },
      {
          "img": "1.png",
          "title": "Nisi",
          "content": "Unless. A Decree That Does Not Enter Into Force Unless Some Other Specified Condition Is Met."
      },
      {
          "img": "2.png",
          "title": "Nisi Prius",
          "content": "Unless First. Refers To The Court Of Original Jurisdiction In A Given Matter."
      },
      {
          "img": "3.png",
          "title": "Nolle Prosequi",
          "content": "Not To Prosecute. A Statement From The Prosecution That They Are Voluntarily Discontinuing (Or Will Not Initiate) Prosecution Of A Matter."
      },
      {
          "img": "4.png",
          "title": "Nolo Contendere",
          "content": "I Do Not Wish To Dispute. A Type Of Plea Whereby The Defendant Neither Admits Nor Denies The Charge. Commonly Interpreted As 'No Contest.'"
      },
      {
          "img": "5.png",
          "title": "Non Adimpleti Contractus",
          "content": "Of A Non-Completed Contract. In The Case Where A Contract Imposes Specific Obligations On Both Parties, One Side Cannot Sue The Other For Failure To Meet Their Obligations, If The Plaintiff Has Not Themselves Met Their Own."
      },
      {
          "img": "6.png",
          "title": "Non Bis In Idem",
          "content": "Not Twice In The Same. Prohibition Against Double Jeopardy. A Legal Action Cannot Be Brought Twice For The Same Act Or Offense."
      },
      {
          "img": "7.png",
          "title": "Non Compos Mentis",
          "content": "Not In Possession Of [One'S] Mind. Not Having Mental Capacity To Perform Some Legal Act"
      },
      {
          "img": "8.png",
          "title": "Non Constat",
          "content": "It Is Not Certain. Refers To Information Given By One Who Is Not Supposed To Give Testimony, Such As An Attorney Bringing Up New Information That Did Not Come From A Witness. Such Information Is Typically Nullified."
      },
      {
          "img": "1.png",
          "title": "Non Decipitur Qui Scit Se Decipi ",
          "content": "He Is Not Deceived Who Knows That He Is Deceived."
      },
      {
          "img": "2.png",
          "title": "Non Definitur In Jure Quid Sit Conatus ",
          "content": "What An Attempt Is, Is Not Defined In Law."
      },
      {
          "img": "3.png",
          "title": "Non Est Arctius Vinculum Inter Homines Quam Jusjurandum ",
          "content": "There Is No Stronger Link Among Men Than An Oath."
      },
      {
          "img": "4.png",
          "title": "Non Est Factum",
          "content": "It Is Not [My] Deed. A Method Whereby A Signatory To A Contract Can Invalidate It By Showing That His Signature To The Contract Was Made Unintentionally Or Without Full Understanding Of The Implications."
      },
      {
          "img": "5.png",
          "title": "Non Est Informatus ",
          "content": "He Is Not Informed."
      },
      {
          "img": "6.png",
          "title": "Non Est Inventus",
          "content": "He Is Not Found. Reported By A Sheriff On Writ When The Defendant Cannot Be Found In His County Or Jurisdiction."
      },
      {
          "img": "7.png",
          "title": "Non Facias Malum Ut Inde Veniat Bonum ",
          "content": "You Shall Not Do Evil That Good May Come Of It."
      },
      {
          "img": "8.png",
          "title": "Non Jus, Sed Seisina, Facit Stipitem ",
          "content": "Not Right, But Seisin Makes A Stock (From Which The Inheritance Must Descend)."
      },
      {
          "img": "1.png",
          "title": "Non Liquet",
          "content": "It Is Not Clear. A Type Of Verdict Where Positive Guilt Or Innocence Cannot Be Determined. Also Called 'Not Proven' In Legal Systems With Such Verdicts."
      },
      {
          "img": "2.png",
          "title": "Non Obstante Verdicto",
          "content": "Notwithstanding The Verdict. A Circumstance Where The Judge May Override The Jury Verdict And Reverse Or Modify The Decision."
      },
      {
          "img": "3.png",
          "title": "Non Refert Quid Notum Sit Judici Si Notum Non Sit In Forma Judicii ",
          "content": "It Matters Not What Is Known To The Judge If It Is Not Known Judicially."
      },
      {
          "img": "4.png",
          "title": "Non Sequitur ",
          "content": "An Inconsistent Statement, It Does Not Follow."
      },
      {
          "img": "5.png",
          "title": "Noscitur A Sociis",
          "content": "It Is Known By Friends. An Ambiguous Word Or Term Can Be Clarified By Considering The Whole Context In Which It Is Used, Without Having To Define The Term Itself."
      },
      {
          "img": "6.png",
          "title": "Nota Bene",
          "content": "Note Well. A Term Used To Direct The Reader To Cautionary Or Qualifying Statements For The Main Text."
      },
      {
          "img": "7.png",
          "title": "Novus Actus Interveniens",
          "content": "A New Action Coming Between. A Break In Causation (And Therefore Probably Liability) Because Something Else Has Happened To Remove The Causal Link."
      },
      {
          "img": "8.png",
          "title": "Nudum Pactum",
          "content": "Naked Promise. An Unenforceable Promise, Due To The Absence Of Consideration Or Value Exchanged For The Promise."
      },
      {
          "img": "1.png",
          "title": "Nulla Bona",
          "content": "No Goods. Notation Made When A Defendant Has No Tangible Property Available To Be Seized In Order To Comply With A Judgement."
      },
      {
          "img": "2.png",
          "title": "Nulla Poena Sine Lege",
          "content": "No Penalty Without A Law. One Cannot Be Prosecuted For Doing Something That Is Not Prohibited By Law."
      },
      {
          "img": "3.png",
          "title": "Nullum Crimen, Nulla Poena Sine Praevia Lege Poenali",
          "content": "No Crime, No Punishment Without A Previous Penal Law. One Cannot Be Prosecuted For Doing Something That Was Not Prohibited By Law At The Time And Place It Was Committed, Notwithstanding Laws Made Since That Time. A Form Of Prohibition On Retroactive Laws."
      },
      {
          "img": "4.png",
          "title": "Nullus Commodum Capere Potest Ex Sua Injuria Propria ",
          "content": "No One Can Derive An Advantage From His Own Wrong."
      },
      {
          "img": "5.png",
          "title": "Nullus Recedat E Curia Cancellaria Sine Remedio ",
          "content": "No One Should Depart From A Court Of Chancery Without A Remedy."
      },
      {
          "img": "6.png",
          "title": "Nunc Pro Tunc",
          "content": "Now For Then. An Action By A Court To Correct A Previous Procedural Or Clerical Error."
      },
      {
          "img": "7.png",
          "title": "Obiter Dictum",
          "content": "A Thing Said In Passing. In Law, An Observation By A Judge On Some Point Of Law Not Directly Relevant To The Case Before Him, And Thus Neither Requiring His Decision Nor Serving As A Precedent, But Nevertheless Of Persuasive Authority. In General, Any Comment, Remark Or Observation Made In Passing."
      },
      {
          "img": "8.png",
          "title": "Omne Sacramentum Debet Esse De Certa Scientia ",
          "content": "Every Oath Ought To Be Of Certain Knowledge."
      },
      {
          "img": "1.png",
          "title": "Omnia Delicta In Aperto Leviora Sunt ",
          "content": "All Crimes (Committed) In The Open Are (Considered) Lighter."
      },
      {
          "img": "2.png",
          "title": "Omnia Praesumuntur Contra Spoliatorem ",
          "content": "All Things Are Presumed Against A Wrongdoer."
      },
      {
          "img": "3.png",
          "title": "Omnis Innovatio Plus Novitate Perturbat Quam Utilitate Prodeat ",
          "content": "Every Innovation Disturbs More By Its Novelty Than It Benefits By Its Utility."
      },
      {
          "img": "4.png",
          "title": "Onus Probandi",
          "content": "Burden Of Proof."
      },
      {
          "img": "5.png",
          "title": "Optima Legum Interpres Est Consuetudo ",
          "content": "The Best Interpreter Of Laws Is Custom."
      },
      {
          "img": "6.png",
          "title": "Optimus Interpres Rerum Est Usus ",
          "content": "The Best Interpreter Of Things Is Usage."
      },
      {
          "img": "7.png",
          "title": "Pace",
          "content": "With Peace. Used To Say 'Contrary To The Opinion Of.' It Is A Polite Way Of Marking A Speaker'S Disagreement With Someone Or Some Body Of Thought."
      },
      {
          "img": "8.png",
          "title": "Pacta Privata Juri Publico Non Derogare Possunt ",
          "content": "Private Contracts Cannot Derogate From Public Law."
      },
      {
          "img": "1.png",
          "title": "Pacta Sunt Servanda",
          "content": "Agreements Must Be Kept. A Fundamental Principle Of Law."
      },
      {
          "img": "2.png",
          "title": "Par Delictum",
          "content": "Equal Fault. Used When Both Parties To A Dispute Are At Fault."
      },
      {
          "img": "3.png",
          "title": "Parens Patriae",
          "content": "Parent Of The Nation. Refers To The Power Of The State To Act As Parent To A Child When The Legal Parents Are Unable Or Unwilling."
      },
      {
          "img": "4.png",
          "title": "Pari Passu",
          "content": "On Equal Footing. Equal Ranking, Equal Priority (Usually Referring To Creditors)."
      },
      {
          "img": "5.png",
          "title": "Partus Sequitur Ventrem ",
          "content": "The Offspring Follows The Mother."
      },
      {
          "img": "6.png",
          "title": "Pater Est Quem Nuptiae Demonstrant ",
          "content": "The Father Is He Whom The Marriage Points Out."
      },
      {
          "img": "7.png",
          "title": "Pater Familias",
          "content": "Father Of The Family. The Head Of Household, For Purposes Of Considering The Rights And Responsibilities Thereof. (Civil Law) Bonus Paterfamilias: A Standard Of Care Equivalent To The Common Law Ordinary Reasonable Man."
      },
      {
          "img": "8.png",
          "title": "Peccata Contra Naturam Sunt Gravissima ",
          "content": "Wrongs Against Nature Are The Most Serious."
      },
      {
          "img": "1.png",
          "title": "Pendente Lite",
          "content": "While The Litigation Is Pending. Court Orders Used To Provide Relief Until The Final Judgement Is Rendered. Commonly Used In Divorce Proceedings. The Adverbial Form Of Lis Pendens (Above)."
      },
      {
          "img": "2.png",
          "title": "Pendente Lite Nihil Innovetur ",
          "content": "During Litigation Nothing Should Be Changed."
      },
      {
          "img": "3.png",
          "title": "Per Capita",
          "content": "By Head. Dividing Money Up Strictly And Equally According To The Number Of Beneficiaries"
      },
      {
          "img": "4.png",
          "title": "Per Contra",
          "content": "By That Against. Legal Shorthand For 'In Contrast To'."
      },
      {
          "img": "5.png",
          "title": "Per Curiam",
          "content": "Through The Court. A Decision Delivered By A Multi-Judge Panel, Such As An Appellate Court, In Which The Decision Is Said To Be Authored By The Court Itself, Instead Of Situations Where Those Individual Judges Supporting The Decision Are Named."
      },
      {
          "img": "6.png",
          "title": "Per Incuriam",
          "content": "By Their Neglect. A Judgement Given Without Reference To Precedent."
      },
      {
          "img": "7.png",
          "title": "Per Minas",
          "content": "Through Threats. Used As A Defense, When Illegal Acts Were Performed Under Duress."
      },
      {
          "img": "8.png",
          "title": "Per Proxima Amici",
          "content": "By Or Through The Next Friend. Employed When An Adult Brings Suit On Behalf Of A Minor, Who Was Unable To Maintain An Action On His Own Behalf At Common Law."
      },
      {
          "img": "1.png",
          "title": "Per Quod",
          "content": "By Which. Used In Legal Documents In The Same Sense As 'Whereby'. A Per Quod Statement Is Typically Used To Show That Specific Acts Had Consequences Which Form The Basis For The Legal Action."
      },
      {
          "img": "2.png",
          "title": "Per Se",
          "content": "By Itself. Something That Is, As A Matter Of Law."
      },
      {
          "img": "3.png",
          "title": "Per Stirpes",
          "content": "By Branch. An Estate Of A Decedent Is Distributed Per Stirpes, If Each Branch Of The Family Is To Receive An Equal Share Of An Estate."
      },
      {
          "img": "4.png",
          "title": "Periculum In Mora",
          "content": "Danger In Delay. A Condition Given To Support Requests For Urgent Action, Such As A Protective Order Or Restraining Order."
      },
      {
          "img": "5.png",
          "title": "Persona Non Grata",
          "content": "Unwelcome Person. A Person Who Is Officially Considered Unwelcome By A Host Country In Which They Are Residing In A Diplomatic Capacity. The Person Is Typically Expelled To Their Home Country."
      },
      {
          "img": "6.png",
          "title": "Posse Comitatus",
          "content": "Power Of The County. A Body Of Armed Citizens Pressed Into Service By Legal Authority, To Keep The Peace Or Pursue A Fugitive."
      },
      {
          "img": "7.png",
          "title": "Post Mortem",
          "content": "After Death. Refers To An Autopsy, Or As A Qualification As To When Some Event Occurred."
      },
      {
          "img": "8.png",
          "title": "Post Mortem Auctoris",
          "content": "After The Author'S Death. Used In Reference To Intellectual Property Rights, Which Usually Are Based Around The Author'S Lifetime."
      },
      {
          "img": "1.png",
          "title": "Praetor Peregrinus",
          "content": "Magistrate Of Foreigners. The Roman Praetor (Magistrate) Responsible For Matters Involving Non-Romans."
      },
      {
          "img": "2.png",
          "title": "Prima Facie",
          "content": "At First Face. A Matter That Appears To Be Sufficiently Based In The Evidence As To Be Considered True."
      },
      {
          "img": "3.png",
          "title": "Prima Impressionis ",
          "content": "On First Impression."
      },
      {
          "img": "4.png",
          "title": "Prior Tempore Potior Iure",
          "content": "Earlier In Time, Stronger In Law. (1) A Legal Principle That Older Laws Take Precedence Over Newer Ones. Another Name For This Principle Is Lex Posterior. (2) (Scots Law, Civil Law), Usually Translated As 'Prior In Time, Superior In Right', The Principle That Someone Who Registers (A Security Interest) Earlier Therefore Ranks Higher Than Other Creditors."
      },
      {
          "img": "5.png",
          "title": "Prius Quam Exaudias Ne Iudices",
          "content": "Before You Hear, Do Not Judge."
      },
      {
          "img": "6.png",
          "title": "Pro Bono",
          "content": "For Good. Professional Work Done For Free."
      },
      {
          "img": "7.png",
          "title": "Pro Bono Publico",
          "content": "For The Public Good."
      },
      {
          "img": "8.png",
          "title": "Pro Forma",
          "content": "As A Matter Of Form. Things Done As Formalities."
      },
      {
          "img": "1.png",
          "title": "Pro Hac Vice",
          "content": "For This Turn. Refers To A Lawyer Who Is Allowed To Participate (Only) In A Specific Case, Despite Being In A Jurisdiction In Which He Has Not Been Generally Admitted."
      },
      {
          "img": "2.png",
          "title": "Pro Per",
          "content": "Abbreviation Of Propria Persona, Meaning 'One'S Own Person'. Representing Oneself, Without Counsel. Also Known As Pro Se Representation."
      },
      {
          "img": "3.png",
          "title": "Pro Rata",
          "content": "From The Rate. A Calculation Adjusted Based On A Proportional Value Relevant To The Calculation. An Example Would Be A Tenant Being Charged A Portion Of A Month'S Rent Based On Having Lived There Less Than A Full Month. The Amount Charged Would Be Proportional To The Time Occupied."
      },
      {
          "img": "4.png",
          "title": "Pro Se",
          "content": "For Himself. Representing Oneself, Without Counsel. Also Known As Pro Per Representation."
      },
      {
          "img": "5.png",
          "title": "Pro Tanto",
          "content": "For So Much. A Partial Payment Of An Award Or Claim, Based On The Defendant'S Ability To Pay."
      },
      {
          "img": "6.png",
          "title": "Pro Tem",
          "content": "Abbreviation Of Pro Tempore, Meaning 'For The Time Being'. Something, Such As An Office Held, That Is Temporary."
      },
      {
          "img": "7.png",
          "title": "Pro Tempore",
          "content": "For The Time Being. Something, Such As An Office Held, That Is Temporary."
      },
      {
          "img": "8.png",
          "title": "Probatio Vincit Praesumptionem",
          "content": "Proof Overcomes Presumption."
      },
      {
          "img": "1.png",
          "title": "Propria Persona",
          "content": "Proper Person. Refers To One Representing Themselves Without The Services Of A Lawyer. Also Known As Pro Per Representation."
      },
      {
          "img": "2.png",
          "title": "Prout Patet Per Recordum",
          "content": "As Appears In The Record. Used To Cite Something That Has Already Been Admitted Into The Record. It Was Frequently Used In Pleadings, Generally Abbreviated 'Prout &C.', To Indicate That A Fact Was Supported By Documentary Evidence. Failure To Use This Phrase Correctly Could Be A Fatal Defect And So Cause A Case To Fail."
      },
      {
          "img": "3.png",
          "title": "Publici Juris ",
          "content": "Of Public Right."
      },
      {
          "img": "4.png",
          "title": "Qua",
          "content": "Which; As. In The Capacity Of."
      },
      {
          "img": "5.png",
          "title": "Quaeitur ",
          "content": "The Question Is Raised."
      },
      {
          "img": "6.png",
          "title": "Quaere",
          "content": "Query. Used In Legal Drafts To Call Attention To Some Uncertainty Or Inconsistency In The Material Being Cited."
      },
      {
          "img": "7.png",
          "title": "Quantum",
          "content": "How Much, An Amount."
      },
      {
          "img": "8.png",
          "title": "Quantum Meruit",
          "content": "As Much As It Deserves; As Much As She Or He Has Earned. In Contract Law, A Quasi-Contractual Remedy That Permits Partial Reasonable Payment For An Incomplete Piece Of Work (Services And/Or Materials), Assessed Proportionately, Where No Price Is Established When The Request Is Made."
      },
      {
          "img": "1.png",
          "title": "Quantum Valebant",
          "content": "As Much As They Were Worth. Under Common Law, A Remedy To Compute Reasonable Damages When A Contract Has Been Breached ' The Implied Promise Of Payment Of A Reasonable Price For Goods."
      },
      {
          "img": "2.png",
          "title": "Quareitur",
          "content": "It Is Sought. The Question Is Raised. Used To Declare That A Question Is Being Asked In The Following Verbiage."
      },
      {
          "img": "3.png",
          "title": "Quasi",
          "content": "As If. Resembling Or Being Similar To Something, Without Actually Being That Thing."
      },
      {
          "img": "4.png",
          "title": "Qui Facit Per Alium Facit Per Se",
          "content": "Who Acts Through Another, Acts Himself. One Who Delegates A Task To Another, Takes Full Responsibility For The Performance Of That Act As If He Himself Had Done It. Basis For The Law Of Agency."
      },
      {
          "img": "5.png",
          "title": "Qui Haeret In Litera, Haeret In Cortice ",
          "content": "He Who Stices To The Letter, Sticks To The Bark."
      },
      {
          "img": "6.png",
          "title": "Qui In Utero Est, Pro Jam Nato Habetur, Quoties De Ejus Commodo Quaeritur ",
          "content": "He Who Is In The Womb Is Considered As Already Born As Far As His Benefit Is Considered."
      },
      {
          "img": "7.png",
          "title": "Qui Non Habet Potestatem Alienandi, Habet Necessitatem Retinendi ",
          "content": "He Who Has Not The Power Of Alienating Is Under The Necessity Of Retaining."
      },
      {
          "img": "8.png",
          "title": "Qui Non Habet, Ille Non Dat ",
          "content": "He Who Has Not, Does Not Give."
      },
      {
          "img": "1.png",
          "title": "Qui Non Improbat, Approbat ",
          "content": "He Who Does Not Disapprove, Approves."
      },
      {
          "img": "2.png",
          "title": "Qui Non Obstat Quod Obstare Potest Facere Videtur ",
          "content": "He Who Does Not Prevent What He Is Able To Prevent, Is Considered As Committing The Thing."
      },
      {
          "img": "3.png",
          "title": "Qui Non Prohibet Quod Prohibere Potest Assentire Videtur ",
          "content": "He Who Does Not Prohibit When He Is Able To Prohibit, Is In Fault."
      },
      {
          "img": "4.png",
          "title": "Qui Peccat Ebrius, Luat Sobrius ",
          "content": "He Who Does Wrong When Drunk Must Be Punished When Sober."
      },
      {
          "img": "5.png",
          "title": "Qui Potest Et Debet Vetare Et Non Vetat Jubet ",
          "content": "He Who Is Able And Ought To Forbit And Does Not, Commands."
      },
      {
          "img": "6.png",
          "title": "Qui Prior Est Tempore Potior Est Jure ",
          "content": "He Who Is Prior In Time Is Stronger In Right."
      },
      {
          "img": "7.png",
          "title": "Qui Sentit Commodum, Debet Et Sentire Onus ",
          "content": "He Who Derives A Benefit Ought Also To Bear A Burden."
      },
      {
          "img": "8.png",
          "title": "Qui Tacet Consentire Videtur ",
          "content": "He Who Is Silent Appears To Consent."
      },
      {
          "img": "1.png",
          "title": "Qui Tam",
          "content": "Abbreviation Of Qui Tam Pro Domino Rege Quam Pro Se Ipso In Hac Parte Sequitur, Meaning 'Who Pursues In This Action As Much For The King As Himself'. In A Qui Tam Action, One Who Assists The Prosecution Of A Case Is Entitled To A Proportion Of Any Fines Or Penalties Assessed."
      },
      {
          "img": "2.png",
          "title": "Quid Pro Quo",
          "content": "This For That. An Equal Exchange Of Goods Or Services, Or Of Money (Or Other Consideration Of Equal Value) For Some Goods Or Services."
      },
      {
          "img": "3.png",
          "title": "Quidcquid Plantatur Solo, Solo Cedit ",
          "content": "Whatever Is Planted In Or Affixed To The Soil, Belongs To The Soil."
      },
      {
          "img": "4.png",
          "title": "Quo Ante",
          "content": "As Before. Returning To A Specific State Of Affairs Which Preceded Some Defined Action."
      },
      {
          "img": "5.png",
          "title": "Quo Warranto",
          "content": "By What Warrant. A Request Made To Someone Exercising Some Power, To Show By What Legal Right They Are Exercising That Power. A Type Of Writ."
      },
      {
          "img": "6.png",
          "title": "Quoad Hoc",
          "content": "As To This. Used To Mean 'With Respect To' Some Named Thing, Such As When Stating What The Law Is In Regards To That Named Thing."
      },
      {
          "img": "7.png",
          "title": "Quod Ab Initio Non Valet, In Tractu Temporis Non Convalescit ",
          "content": "What Is Not Valid In The Beginning Does Not Become Valid By Time."
      },
      {
          "img": "8.png",
          "title": "Quod Constat Curiae Opere Testium Non Indiget ",
          "content": "What Appears To The Court Needs Not The Help Of Witnesses."
      },
      {
          "img": "1.png",
          "title": "Quod Est Necessarium Est Licitum",
          "content": "What Is Necessary Is Lawful."
      },
      {
          "img": "2.png",
          "title": "Quod Necessarie Intelligitur, Id Non Deest ",
          "content": "What Is Necessarily Understood Is Not Wanting."
      },
      {
          "img": "3.png",
          "title": "Quod Necessitas Cogit, Defendit ",
          "content": "What Necessity Forces It Justifies."
      },
      {
          "img": "4.png",
          "title": "Quod Non Apparet, Non Est ",
          "content": "What Does Not Appear, Is Not."
      },
      {
          "img": "5.png",
          "title": "Quod Non Habet Principium Non Habet Finem ",
          "content": "What Has No Beginning Has No End."
      },
      {
          "img": "6.png",
          "title": "Quod Per Me Non Possum, Nec Per Alium ",
          "content": "What I Cannot Do Through Myself, I Cannot Do Through Another."
      },
      {
          "img": "7.png",
          "title": "Quod Prius Est Verius Est; Et Quod Prius Est Tempore Potius Est Jure ",
          "content": "What Is First Is More True; And What Is Prior In Time Is Stronger In Law."
      },
      {
          "img": "8.png",
          "title": "Quod Vanum Et Inutile Est, Lex Non Requirit ",
          "content": "The Law Does Not Require What Is Vain And Useless."
      },
      {
          "img": "1.png",
          "title": "Quoties In Verbis Nulla Est Ambiguitas, Ibi Nulla Expositio Contra Verba Expressa Fienda Est ",
          "content": "When There Is No Ambiguity In Words, Then No Exposition Contrary To The Expressed Words Is To Be Made."
      },
      {
          "img": "2.png",
          "title": "Rex Or Regina. King Or Queen.",
          "content": " In British Cases,You Will See R V Freeman Meaning Regina Against Freeman. Changes With King Or Queen On Throne At Time."
      },
      {
          "img": "3.png",
          "title": "Ratio Decidendi",
          "content": "Reason For The Decision. The Point In A Legal Proceeding, Or The Legal Precedent So Involved, Which Led To The Final Decision Being What It Was."
      },
      {
          "img": "4.png",
          "title": "Ratio Est Legis Anima, Mutata Legis Ratione Mutatur Et Lex ",
          "content": "Reason Is The Soul Of The Law; When The Reason Of The Law Changes The Law Also Is Changed."
      },
      {
          "img": "5.png",
          "title": "Ratio Scripta",
          "content": "Written Reason. The Popular Opinion Of Roman Law, Held By Those In The Medieval Period."
      },
      {
          "img": "6.png",
          "title": "Rationae Soli",
          "content": "By Reason Of The Soil. Certain Rights May Arise By Virtue Of Ownership Of The Soil Upon Which Wild Animals Are Found."
      },
      {
          "img": "7.png",
          "title": "Re ",
          "content": "In The Matter Of."
      },
      {
          "img": "8.png",
          "title": "Rebus Sic Stantibus",
          "content": "Things Thus Standing. A Qualification In A Treaty Or Contract, That Allows For Nullification In The Event Fundamental Circumstances Change."
      },
      {
          "img": "1.png",
          "title": "Recognition Is The Greatest Motivator ",
          "content": "Agnitio Est Maioribus Motivator."
      },
      {
          "img": "2.png",
          "title": "Reddendo Singula Singulis",
          "content": "Referring Solely To The Last. The Canon Of Construction That In A List Of Items Containing A Qualifying Phrase At The End, The Qualifier Refers Only To The Last Item In The List."
      },
      {
          "img": "3.png",
          "title": "Reprobata Pecunia Leberat Solventem ",
          "content": "Money Refused Releases The Debtor."
      },
      {
          "img": "4.png",
          "title": "Res",
          "content": "Thing, Matter, Issue, Affair."
      },
      {
          "img": "5.png",
          "title": "Res ",
          "content": "Matter, Affair, Thing, Circumstance."
      },
      {
          "img": "6.png",
          "title": "Res Communis",
          "content": "Common To All. Property Constructs Like Airspace And Water Rights Are Said To Be Res Communis ' That Is, A Thing Common To All, And That Could Not Be The Subject Of Ownership. With Airspace, The Difficulty Has Been To Identify Where The Fee Simple Holder'S Rights To The Heavens End. Water Is A Bit More Defined ' It Is Common Until Captured."
      },
      {
          "img": "7.png",
          "title": "Res Gestae",
          "content": "Things Done. Differing Meaning Depending On What Type Of Law Is Involved. May Refer To The Complete Act Of A Felony, From Start To Finish, Or May Refer To Statements Given That May Be Exempt From Hearsay Rules."
      },
      {
          "img": "8.png",
          "title": "Res Integra ",
          "content": "A Matter Untouched (By Decision)."
      },
      {
          "img": "1.png",
          "title": "Res Inter Alios Acta Alteri Nocere Non Debet ",
          "content": "Things Done Between Strangers Ought Not To Affect A Third Person, Who Is A Stranger To The Transaction."
      },
      {
          "img": "2.png",
          "title": "Res Ipsa Loquitur",
          "content": "The Thing Speaks For Itself. Used In Tort Law When There Is No Proof Of What Caused The Harm, But It Is Most Likely Only The Thing That Could Have Caused The Harm."
      },
      {
          "img": "3.png",
          "title": "Res Judicata",
          "content": "A Matter Judged. A Matter That Has Been Finally Adjudicated, Meaning No Further Appeals Or Legal Actions By The Involved Parties Is Now Possible."
      },
      {
          "img": "4.png",
          "title": "Res Nullis ",
          "content": "Nobody S Property."
      },
      {
          "img": "5.png",
          "title": "Res Nullius",
          "content": "Nobody'S Thing. Ownerless Property Or Goods. Such Property Or Goods Are Able And Subject To Being Owned By Anybody."
      },
      {
          "img": "6.png",
          "title": "Res Publica",
          "content": "Public Affair. All Things Subject To Concern By The Citizenry. The Root Of The Word Republic."
      },
      {
          "img": "7.png",
          "title": "Res Publica Christiana",
          "content": "Christian Public Affair. All Things Of Concern To The Worldwide Body Of Christianity."
      },
      {
          "img": "8.png",
          "title": "Respondeat Superior",
          "content": "Let The Master Answer. A Concept That The Master (E.G. Employer) Is Responsible For The Actions Of His Subordinates (E.G. Employees)."
      },
      {
          "img": "1.png",
          "title": "Restitutio In Integrum",
          "content": "Total Reinstatement. Restoration Of Something, Such As A Building Or Damaged Property, To Its Original Condition. In Contract Law, When Considering Breach Of Contract And Remedies, To Restore A Party To An Original Position."
      },
      {
          "img": "2.png",
          "title": "Rex Est Major Singulis, Minor Universis ",
          "content": "The King Is Greater Than Individuals, Less Than All The People."
      },
      {
          "img": "3.png",
          "title": "Rex Non Debet Judicare Sed Secundum Legem ",
          "content": "The King Ought Not To Judge But According To The Law."
      },
      {
          "img": "4.png",
          "title": "Rex Non Potest Peccare",
          "content": "The King Can Do No Wrong. Used To Describe The Basis For Sovereign Immunity."
      },
      {
          "img": "5.png",
          "title": "Rex Nunquma Moritur ",
          "content": "The King Never Dies."
      },
      {
          "img": "6.png",
          "title": "Rex Quod Injustum Est Facere Non Potest ",
          "content": "The King Cannot Do What Is Unjust."
      },
      {
          "img": "7.png",
          "title": "Salus Populi Est Suprema Lex ",
          "content": "The Safety Of The People Is The Supreme Law."
      },
      {
          "img": "8.png",
          "title": "Salus Populi Suprema Lex Esto",
          "content": "The Good Of The People Shall Be The Supreme Law. Used Variously As A Motto, A Reminder, Or A Notion Of How The Law And Governments In General Should Be."
      },
      {
          "img": "1.png",
          "title": "Scandalum Magnatum",
          "content": "Scandal Of The Magnates. Defamation Against A Peer In British Law. Now Repealed As A Specific Offense."
      },
      {
          "img": "2.png",
          "title": "Sciens ",
          "content": "Knowingly."
      },
      {
          "img": "3.png",
          "title": "Scienter",
          "content": "Knowingly. Used When Offenses Or Torts Were Committed With The Full Awareness Of The One So Committing."
      },
      {
          "img": "4.png",
          "title": "Scire Facias",
          "content": "Let Them Know. A Writ, Directing Local Officials To Officially Inform A Party Of Official Proceedings Concerning Them."
      },
      {
          "img": "5.png",
          "title": "Scire Feci",
          "content": "I Have Made Known. The Official Response Of The Official Serving A Writ Of Scire Facias, Informing The Court That The Writ Has Been Properly Delivered."
      },
      {
          "img": "6.png",
          "title": "Scribere Est Agere ",
          "content": "To Write Is To Act."
      },
      {
          "img": "7.png",
          "title": "Se Defendendo",
          "content": "Self-Defense. The Act Of Defending One'S Own Person Or Property, Or The Well-Being Or Property Of Another."
      },
      {
          "img": "8.png",
          "title": "Secundum Formam Statuti",
          "content": "According To The Form Of The Statute."
      },
      {
          "img": "1.png",
          "title": "Secus ",
          "content": "The Legal Position Is Different, It Is Otherwise."
      },
      {
          "img": "2.png",
          "title": "Semper Praesumitur Pro Legitimatione Puerorum ",
          "content": "Everything Is Presumed In Favor Of The Legitimacy Of Children."
      },
      {
          "img": "3.png",
          "title": "Semper Pro Matriomonio Praesumitur ",
          "content": "It Is Always Presumed In Favor Of Marriage."
      },
      {
          "img": "4.png",
          "title": "Sententia Interlocutoria Revocari Potest, Definitiva Non Potest ",
          "content": "An Interlocutory Order Can Be Revoked, A Final Order Cannot Be."
      },
      {
          "img": "5.png",
          "title": "Seriatim",
          "content": "In Series. Describes The Process In Which The Court Hears Assorted Matters In A Specific Order. Also Refers To An Occasion Where A Multiple-Judge Panel Will Issue Individual Opinions From The Members, Rather Than A Single Ruling From The Entire Panel."
      },
      {
          "img": "6.png",
          "title": "Servitia Personalia Sequuntur Personam ",
          "content": "Personal Services Follow The Person."
      },
      {
          "img": "7.png",
          "title": "Sic Utere Tuo Ut Alienum Non Laedas",
          "content": "Use Your Property So As Not To Injure That Of Your Neighbours. While An Individual Is Entitled To The Use And Enjoyment Of One'S Estate, The Right Is Not Without Limits. Restrictions Can Give Rise To Tort Actions Include Trespass, Negligence, Strict Liability, And Nuisance."
      },
      {
          "img": "8.png",
          "title": "Sic Utere Tuo Ut Alienum Non Laedas ",
          "content": "So Use Your Own As Not To Injure Another S Property."
      },
      {
          "img": "1.png",
          "title": "Simplex Commendatio Non Obligat ",
          "content": "A Simple Recommendation Does Not Bind."
      },
      {
          "img": "2.png",
          "title": "Sine Die",
          "content": "Without Day. Used When The Court Is Adjourning Without Specifying A Date To Re-Convene. See Also Adjournment Sine Die."
      },
      {
          "img": "3.png",
          "title": "Sine Qua Non",
          "content": "Without Which, Nothing. Refers To Some Essential Event Or Action, Without Which There Can Be No Specified Consequence."
      },
      {
          "img": "4.png",
          "title": "Situs",
          "content": "The Place. Used To Refer To Laws Specific To The Location Where Specific Property Exists, Or Where An Offense Or Tort Was Committed."
      },
      {
          "img": "5.png",
          "title": "Solutio Indebiti",
          "content": "Performance Of Something Not Due. Undue Performance Or Payment, Obliging The Enrichee (Accipiens) To Return The Undue Payment Or Compensate The Impoverishee (Solvens) For The Undue Performance"
      },
      {
          "img": "6.png",
          "title": "Stare Decisis",
          "content": "To Stand By [Things] Decided. The Obligation Of A Judge To Stand By A Prior Precedent."
      },
      {
          "img": "7.png",
          "title": "Statu Quo",
          "content": "The State In Which. In Contract Law, In A Case Of Innocent Representation, The Injured Party Is Entitled To Be Replaced In Statu Quo. Note The Common Usage Is Status Quo From The Latin Status Quo Ante, The 'State In Which Before' Or 'The State Of Affairs That Existed Previously.'"
      },
      {
          "img": "8.png",
          "title": "Stet ",
          "content": "Do Not Delete, Let It Stand."
      },
      {
          "img": "1.png",
          "title": "Stratum",
          "content": "A Covering, From Neuter Past Participle Of Sternere, To Spread. In Property Law, Condominiums Has Said To Occupy Stratum Many Stories About The Ground. Stratum Can Also Be A Societial Level Made Up Of Individuals With Similar Status Of Social, Cultural Or Economic Nature. Stratum Can Refer To Classification In An Organized System Along The Lines Of Layers, Levels, Divisions, Or Similar Grouping."
      },
      {
          "img": "2.png",
          "title": "Sua Sponte",
          "content": "Of Its Own Accord. Some Action Taken By The Public Prosecutor Or Another Official Body, Without The Prompting Of A Plaintiff Or Another Party. (Compare Ex Proprio Motu, Ex Mero Motu Which Are Used For Courts)."
      },
      {
          "img": "3.png",
          "title": "Sub Judice",
          "content": "Under The Judge. Refers To A Matter Currently Being Considered By The Court."
      },
      {
          "img": "4.png",
          "title": "Sub Modo",
          "content": "Subject To Modification. Term In Contract Law That Allows Limited Modifications To A Contract After The Original Form Has Been Agreed To By All Parties."
      },
      {
          "img": "5.png",
          "title": "Sub Nomine",
          "content": "Under The Name. Abbreviated Sub Nom.; Used In Case Citations To Indicate That The Official Name Of A Case Changed During The Proceedings, Usually After Appeal (E.G., Rev'D Sub Nom. And Aff'D Sub Nom.)"
      },
      {
          "img": "6.png",
          "title": "Sub Silentio",
          "content": "Under Silence. A Ruling, Order, Or Other Court Action Made Without Specifically Stating The Ruling, Order, Or Action. The Effect Of The Ruling Or Action Is Implied By Related And Subsequent Actions, But Not Specifically Stated."
      },
      {
          "img": "7.png",
          "title": "Sublata Causa, Tollitur Effectus ",
          "content": "The Cause Being Removed, The Effect Ceases."
      },
      {
          "img": "8.png",
          "title": "Sublato Fundamento, Cadit Opus ",
          "content": "The Foundation Being Removed, The Structure Falls."
      },
      {
          "img": "1.png",
          "title": "Subpoena",
          "content": "Under Penalty. A Writ Compelling Testimony, The Production Of Evidence, Or Some Other Action, Under Penalty For Failure To Do So."
      },
      {
          "img": "2.png",
          "title": "Subpoena Ad Testificandum",
          "content": "Under Penalty To Be Witnessed. An Order Compelling An Entity To Give Oral Testimony In A Legal Matter."
      },
      {
          "img": "3.png",
          "title": "Subpoena Duces Tecum",
          "content": "Bring With You Under Penalty. An Order Compelling An Entity To Produce Physical Evidence Or Witness In A Legal Matter."
      },
      {
          "img": "4.png",
          "title": "Subsequens Matrimonium Tollit Peccatum Praecedens ",
          "content": "A Subsequent Marriage Removes The Preceding Wrong."
      },
      {
          "img": "5.png",
          "title": "Suggestio Falsi",
          "content": "False Suggestion. A False Statement Made In The Negotiation Of A Contract."
      },
      {
          "img": "6.png",
          "title": "Sui Generis",
          "content": "Of Its Own Kind/Genus. Something That Is Unique Amongst A Group."
      },
      {
          "img": "7.png",
          "title": "Sui Juris",
          "content": "Of His Own Right. Refers To One Legally Competent To Manage His Own Affairs. Also Spelled Sui Iuris."
      },
      {
          "img": "8.png",
          "title": "Summa Ratio Est Quae Pro Religione Facit ",
          "content": "The Highest Reason Is That Which Makes For Religion, I.E. Religion Dictates."
      },
      {
          "img": "1.png",
          "title": "Suo Motu",
          "content": "Of Its Own Motion. Refers To A Court Or Other Official Agency Taking Some Action On Its Own Accord (Synonyms: Ex Proprio Motu, Ex Mero Motu). Similar To Sua Sponte."
      },
      {
          "img": "2.png",
          "title": "Supersedeas",
          "content": "Refrain From. A Bond Tendered By An Appellant As Surety To The Court, Requesting A Delay Of Payment For Awards Or Damages Granted, Pending The Outcome Of The Appeal."
      },
      {
          "img": "3.png",
          "title": "Suppressio Veri",
          "content": "Suppression Of The Truth. Willful Concealment Of The Truth When Bound To Reveal It, Such As Withholding Details Of Damage From An Auto Accident From A Prospective Buyer Of The Car In That Accident."
      },
      {
          "img": "4.png",
          "title": "Suppressio Veri Expressio Falsi ",
          "content": "A Suppression Of Truth Is Equivalent To An Expression Of Falsehood."
      },
      {
          "img": "5.png",
          "title": "Supra",
          "content": "Above. Used In Citations To Refer To A Previously Cited Source."
      },
      {
          "img": "6.png",
          "title": "Talis Qualis ",
          "content": "Such As It Is."
      },
      {
          "img": "7.png",
          "title": "Tantum Et Tale",
          "content": "Thus And Such. (Scots Law) 'As Is', To Disclaim Implied Warranties, As In To Purchase Or Convey Something Tantum Et Tale."
      },
      {
          "img": "8.png",
          "title": "Terra Firma ",
          "content": "Solid Ground."
      },
      {
          "img": "1.png",
          "title": "Terra Nullius",
          "content": "No One'S Land. Land That Has Never Been Part Of A Sovereign State, Or Land Which A Sovereign State Has Relinquished Claim To."
      },
      {
          "img": "2.png",
          "title": "Testamenta Latissimam Interpretationem Habere Debent ",
          "content": "Testaments Ought To Have The Broadest Interpretation."
      },
      {
          "img": "3.png",
          "title": "Traditio Loqui Chartam Facit ",
          "content": "Delivery Makes A Deed Speak."
      },
      {
          "img": "4.png",
          "title": "Transit Terra Cum Onere ",
          "content": "The Land Passes With Its Burden."
      },
      {
          "img": "5.png",
          "title": "Trial De Novo",
          "content": "Trial Anew. A Completely New Trial Of A Matter Previously Judged. It Specifically Refers To A Replacement Trial For The Previous One, And Not An Appeal Of The Previous Decision."
      },
      {
          "img": "6.png",
          "title": "Trinoda Necessitas",
          "content": "Three-Knotted Need. Refers To A Threefold Tax Levied On Anglo-Saxon Citizens To Cover Roads, Buildings, And The Military."
      },
      {
          "img": "7.png",
          "title": "Uberrima Fides",
          "content": "Most Abundant Faith. Concept In Contract Law Specifying That All Parties Must Act With The Utmost Good Faith."
      },
      {
          "img": "8.png",
          "title": "Ubi Eadem Ratio Ibi Idem Jus, Et De Similibus Idem Est Judicium ",
          "content": "When There Is The Same Reason, Then The Law Is The Same, And The Same Judgment Should Be Rendered As To Similar Things."
      },
      {
          "img": "1.png",
          "title": "Ubi Jus Ibi Remedium Est ",
          "content": "Where There Is A Right There Is A Remedy."
      },
      {
          "img": "2.png",
          "title": "Ubi Non Est Principalis, Non Potest Esse Accessorius ",
          "content": "Where There Is No Principal, There Can Be No Accessory."
      },
      {
          "img": "3.png",
          "title": "Ubi Nullum Matrimonium, Ibi Nulla Dos Es ",
          "content": "Where There Is No Marriage, There Is No Dower."
      },
      {
          "img": "4.png",
          "title": "Ultima Voluntas Testatoris Est Perimplenda Secundum Veram Intentionem Suam ",
          "content": "The Last Will Of A Testator Is To Be Fulfilled According To His True Intentio."
      },
      {
          "img": "5.png",
          "title": "Ultra Posse Nemo Obligatur",
          "content": "No One Is Obligated (To Do) More Than He Can. Specifies That One Should Do What He Can To Support The Community, But Since Everyone Has Different Levels Of Ability, It Cannot Be Expected That All Will Perform The Same."
      },
      {
          "img": "6.png",
          "title": "Ultra Vires",
          "content": "Beyond The Powers. An Act That Requires Legal Authority To Perform, But Which Is Done Without Obtaining That Authority."
      },
      {
          "img": "7.png",
          "title": "Universitas Personarum",
          "content": "Totality Of People. Aggregate Of People, Body Corporate, As In A College, Corporation, Or State"
      },
      {
          "img": "8.png",
          "title": "Universitas Rerum",
          "content": "Totality Of Things. Aggregate Of Things."
      },
      {
          "img": "1.png",
          "title": "Uno Flatu",
          "content": "In One Breath. Used To Criticize Inconsistencies In Speech Or Testimony, As In: One Says One Thing, And In The Same Breath, Says Another Contradictory Thing."
      },
      {
          "img": "2.png",
          "title": "Ut Poena Ad Paucos, Metus Ad Omnes, Perveniat ",
          "content": "That Punishment May Come To A Few, The Fear Of It Should Affect All."
      },
      {
          "img": "3.png",
          "title": "Uti Possidetis",
          "content": "As You Possess. Ancient Concept Regarding Conflicts, Wherein All Property Possessed By The Parties At The Conclusion Of The Conflict Shall Remain Owned By Those Parties Unless Treaties To The Contrary Are Enacted."
      },
      {
          "img": "4.png",
          "title": "Utile Per Inutile Non Vitiatur ",
          "content": "What Is Useful Is Not Vitiated By The Useless."
      },
      {
          "img": "5.png",
          "title": "Uxor",
          "content": "Wife. Used In Documents In Place Of The Wife'S Name. Usually Abbreviated Et Ux."
      },
      {
          "img": "6.png",
          "title": "Vel Non",
          "content": "Or Not. Used When Considering Whether Some Event Or Situation Is Either Present Or It Is Not."
      },
      {
          "img": "7.png",
          "title": "Verba Chartarum Fortius Accipiuntur Contra Preferentem ",
          "content": "The Words Of Deeds Are Accepted More Strongly Against The Person Offering Them."
      },
      {
          "img": "8.png",
          "title": "Verba Debent Intelligi Cum Effectu ",
          "content": "Words Ought To Be Understood With Effect."
      },
      {
          "img": "1.png",
          "title": "Verba Intentioni, Non E Contra, Debent Inservire ",
          "content": "Words Ought To Serve The Intention, Not The Reverse."
      },
      {
          "img": "2.png",
          "title": "Verbatim ",
          "content": "Word By Word, Exactly."
      },
      {
          "img": "3.png",
          "title": "Veto",
          "content": "I Forbid. The Power Of An Executive To Prevent An Action, Especially The Enactment Of Legislation."
      },
      {
          "img": "4.png",
          "title": "Vi Et Armis ",
          "content": "With The Force And Arms."
      },
      {
          "img": "5.png",
          "title": "Via Antiqua Via Est Tuta ",
          "content": "The Old Way Is The Safe Way."
      },
      {
          "img": "6.png",
          "title": "Vice Versa",
          "content": "The Other Way Around. Something That Is The Same Either Way."
      },
      {
          "img": "7.png",
          "title": "Vice Versa ",
          "content": "The Other Way Around."
      },
      {
          "img": "8.png",
          "title": "Vide",
          "content": "See. Used In Citations To Refer The Reader To Another Location."
      },
      {
          "img": "1.png",
          "title": "Videlicet",
          "content": "Contraction Of Videre Licet, Meaning 'It Is Permitted To See'. Used In Documents To Mean 'Namely' Or 'That Is'. Usually Abbreviated Viz."
      },
      {
          "img": "2.png",
          "title": "Vigilantibus Non Dormientibus Aequitas Subvenit",
          "content": "Equity Aids The Vigilant, Not The Sleeping. Concept That If An Opposing Party Unreasonably Delays Bringing An Action, That It Is No Longer Considered Just To Hear Their Claim, Due To Fundamental Changes In Circumstance Brought Upon By Their Delay."
      },
      {
          "img": "3.png",
          "title": "Vigilantibus Non Dormientibus Jura Subveniunt ",
          "content": "The Laws Serve The Vigilant, Not Those Who Sleep."
      },
      {
          "img": "4.png",
          "title": "Vinculum Juris",
          "content": "The Chains Of The Law. Something Which Is Legally Binding."
      },
      {
          "img": "5.png",
          "title": "Vir Et Uxor Consentur In Lege Una Persona ",
          "content": "A Husband And Wife Are Regarded In Law As One Person."
      },
      {
          "img": "6.png",
          "title": "Vis Major",
          "content": "Greater Or Superior Force. Force Majeure, Specifically Events Over Which No Humans Have Control, And So Cannot Be Held Responsible. Equivalent To An 'Act Of God'. Compare Casus Fortuitus (See Above)."
      },
      {
          "img": "7.png",
          "title": "Visitationem Commendamus ",
          "content": "We Recommend A Visitation."
      },
      {
          "img": "8.png",
          "title": "Viz.",
          "content": "Abbreviation Of Videlicet. Namely."
      },
      {
          "img": "1.png",
          "title": "Volens ",
          "content": "Willing."
      },
      {
          "img": "2.png",
          "title": "Volenti Non Fit Injuria",
          "content": "Injury Is Not Done To The Willing. Notion That A Person Cannot Bring A Claim Against Another For Injury, If Said Person Willingly Placed Themselves In A Situation Where They Knew Injury Could Result."
      },
      {
          "img": "3.png",
          "title": "Voluntas In Delictis Non Exitus Spectatur ",
          "content": "In Offences The Intent And Not The Result Is Looked At."
      },
      {
          "img": "4.png",
          "title": "Voluntas Reputatur Pro Facto ",
          "content": "The Will Is Taken For The Deed."
      },
      
  ];
  }

  handleClick(url) {
      this.iab.create(url, "_system");
  }
 
}