import { useState } from "react";
import { Banner } from "../components/Banner";
import { EmailForm } from "../components/EmailForm";
import { Questions } from "../components/Questions";
import { ResultForm } from "../components/ResultForm";
import {ResultPage} from "../components/ResultPage";
import {ResultBanner} from "../components/ResultBanner";


export const Home = () => {
  const [formSubmitted, setFormSubmitted] = useState(0);
  const [count, setCount] = useState(0);
  const [bar, setBar] = useState(0);
  const [radioValue, setRadioValue] = useState([]);
  const [totalRadioValue, setTotalRadioValue] = useState(0);

  console.log(radioValue, "check")

  const questions = [
    {
      questiontitle: "As an organisation, we have a clear CX vision and goals",
      name: "n1_dedicated_customer_team",
      title: "Vision",
      options: [
        {
          text: "Definitely Yes",
          value: 4,
        },
        {
          text: "Mostly Yes",
          value: 3,
        },
        {
          text: "Somewhat Yes",
          value: 2,
        },
        {
          text: "Somewhat No",
          value: 1,
        },
        {
          text: "Definitely No",
          value: 0,
        },
      ],
    },
    {
      questiontitle: "We have a mid to long term CX roadmap",
      name: "n2_clear_cx_vision_and_goals",
      title: "Strategic Focus",
      options: [
        {
          text: "Long-term (2-3 years)",
          value: 4,
        },
        {
          text: "Yearly (>1 year)",
          value: 3,
        },
        {
          text: "Short-term (6-12 months)",
          value: 2,
        },
        {
          text: "On project/initiative level",
          value: 1,
        },
        {
          text: "No CX initiative at the moment",
          value: 0,
        },
      ],
    },
    {
      questiontitle: "We have clear KPI’s to track our CX success and progress",
      name: "n3_cx_roadmap",
      title: "Measurement",
      options: [
        {
          text: "Definitely Yes",
          value: 4,
        },
        {
          text: "Mostly Yes",
          value: 3,
        },
        {
          text: "Somewhat Yes",
          value: 2,
        },
        {
          text: "Somewhat No",
          value: 1,
        },
        {
          text: "Definitely No",
          value: 0,
        },
      ],
    },
    {
      questiontitle:
        "We have strong support and  buy-in from the C-suite for our CX initiatives",
      name: "n4_clear_kpi_to_tack_cx_success",
      title: "Leadership",
      options: [
        {
          text: "Definitely Yes",
          value: 4,
        },
        {
          text: "Mostly Yes",
          value: 3,
        },
        {
          text: "Somewhat Yes",
          value: 2,
        },
        {
          text: "Somewhat No",
          value: 1,
        },
        {
          text: "Definitely No",
          value: 0,
        },
      ],
    },
    {
      questiontitle:
        "We have a dedicated customer team that manages the CX strategy and execution",
      name: "n5_strong_support_and_buy_in_from_c_suite",
      title: "Skills",
      options: [
        {
          text: "Definitely Yes",
          value: 4,
        },
        {
          text: "Mostly Yes",
          value: 3,
        },
        {
          text: "Somewhat Yes",
          value: 2,
        },
        {
          text: "Somewhat No",
          value: 1,
        },
        {
          text: "Definitely No",
          value: 0,
        },
      ],
    },
    {
      questiontitle:
        "Our technology and tools provide customer insights in real-time",
      name: "n6_tech_and_tools",
      title: "Customer Centricity",
      options: [
        {
          text: "Definitely Yes",
          value: 4,
        },
        {
          text: "Mostly Yes",
          value: 3,
        },
        {
          text: "Somewhat Yes",
          value: 2,
        },
        {
          text: "Somewhat No",
          value: 1,
        },
        {
          text: "Definitely No",
          value: 0,
        },
      ],
    },
    {
      questiontitle:
        "We collect Voice of the Customer insights as an ongoing (always-on) effort",
      name: "n7_collecting_voice",
      title: "Readiness",
      options: [
        {
          text: "Definitely Yes",
          value: 4,
        },
        {
          text: "Mostly Yes",
          value: 3,
        },
        {
          text: "Somewhat Yes",
          value: 2,
        },
        {
          text: "Somewhat No",
          value: 1,
        },
        {
          text: "Definitely No",
          value: 0,
        },
      ],
    },
    {
      questiontitle:
        "We are utilising customer's input in our key decision-making for our business, service and product strategy",
      name: "n8_utilising_customer_input",
      title: "Decision Making",
      options: [
        {
          text: "Definitely Yes",
          value: 4,
        },
        {
          text: "Mostly Yes",
          value: 3,
        },
        {
          text: "Somewhat Yes",
          value: 2,
        },
        {
          text: "Somewhat No",
          value: 1,
        },
        {
          text: "Definitely No",
          value: 0,
        },
      ],
    },
    {
      questiontitle:
        "As an organisation, we have a clear sense of our customer's end-to-end journey",
      name: "n9_know_end_to_end_journey",
      title: "Insights",
      options: [
        {
          text: "Definitely Yes",
          value: 4,
        },
        {
          text: "Mostly Yes",
          value: 3,
        },
        {
          text: "Somewhat Yes",
          value: 2,
        },
        {
          text: "Somewhat No",
          value: 1,
        },
        {
          text: "Definitely No",
          value: 0,
        },
      ],
    },
    {
      questiontitle: "We provide personalised support to our customers",
      name: "n10_provide_personalised_support",
      title: "Personalisation",
      options: [
        {
          text: "Definitely Yes",
          value: 4,
        },
        {
          text: "Mostly Yes",
          value: 3,
        },
        {
          text: "Somewhat Yes",
          value: 2,
        },
        {
          text: "Somewhat No",
          value: 1,
        },
        {
          text: "Definitely No",
          value: 0,
        },
      ],
    },
  ];

  const maturityMatrix =  [
    {
      stage: {
        range: [0, 8],
        number: "Stage One",
        title: "Reactive",
        summary: "<p>There is little awareness of the value of CX across your organisation. Little to none (intentional) effort in nurturing customer relationship and no strategic focus to improve CX.</p>"
      },
      focus: [
        "The first step should be to understand the importance of CX and get buy ins from the leadership. ",
        "Recognise and outline the baseline customer needs and insights and focus on building a business case to get started on your CX journey.",
        "Focusing on some addressable areas for investment to accelerate your organizations maturity from your customers needs. "
      ],
      acclerate: ["CX Accelerator Workshop", "Customer 360&deg; Review", "Voice of Customer Review"]
    },
    {
      stage: {
        range: [9, 18],
        number: "Stage Two",
        title: "Learning",
        summary: "<p>Your results indicate you might have started a few CX initiatives and even tasted short term successes. Some of your team are beginning to realise the value of CX and are beginning to think about prioritising a specific and focused CX strategy.</p>"
      },
      focus: [
        "The first step should be to understand the importance of CX and get buy ins from leadership.",
        "To start looking into the end-to-end customer journey and interactions with your brand rather, than focusing on improving a single isolated touchpoint.",
        "Consider the future state of any investment into your technologies and processes to minimise technical debt."
      ],
      acclerate: ["CX Strategy Consulting", "Customer Journey Mapping", "Conversational Experience"]
    },
    {
      stage: {
        range: [19, 27],
        number: "Stage Three",
        title: "Capable",
        summary: "<p>You have a functioning CX operation based on your fiscal goals. While your website and other key touchpoints are performing adequately, there is still room for improvement in terms of delivering a cohesive and integrated brand experience to your customers.</p>"
      },
      focus: [
        "Catering to long term value of customers and tracking organisational success across the end to end customer journey, rather than focusing on the immediate metrics.",
        "Focusing on integrating you customer channels and examine whether your service is designed to effectively support a fully integrated customer experience."
      ],
      acclerate: ["CX Strategy Consulting", "Service Blueprint", "Omnichannel CX Strategy"]
    },
    {
      stage: {
        range: [28, 35],
        number: "Stage Four",
        title: "Proactive",
        summary: "<p>You have a functioning CX operation based on your fiscal goals. While your website and other key touchpoints are performing adequately, there is still room for improvement in terms of delivering a cohesive and integrated brand experience to your customers.</p>"
      },
      focus: [
        "Prioritizing scaling your customer experience by reevaluating your goals, and any segments which require further support",
        "Identifying areas or metrics of your experience that can be optimized to achieve higher levels of performance.",
        "Ensuring that both the service level and the operational and training aspects of your experience are aligned cohesively with your CX goals."
      ],
      acclerate: ["CX Strategy Consulting", "CX Program & Operation Consulting", "EX Strategy Consulting"]
    },
    {
      stage: {
        range: [36, 40],
        number: "Stage Five",
        title: "Leading",
        summary: "<p>You understand the entire life cycle of your customers and be able to guide them on their interactions with your brand through cutting edge CX intelligence and hyper personalisation.</p>"
      },
      focus: [
        "Iterating and evolving. Your work is not complete. As customer expectations continue to evolve, it's essential to keep a close eye on your customers and predict their desires before they even know what they want.",
        "Becoming an industry leader and disrupting throughout continuous evolution and exploration (Test, Learn and Evolve)."
      ],
      acclerate: ["CX Strategy Consulting", "CX Innovation Lab"]
    } 
  ];

  const acclerate = [
    {
      title: "CX Accelerator Workshop",
      logo: "images/acclerate/acclerate-placeholder.svg",
      summary: "A rapid session with your stakeholders to align on your CX Vision and identify acceleration opportunities. (Quick wins vs. Long-term) ",
      link: "#"
    },
    {
      title: "Customer 360&deg; Review",
      logo: "acclerate-placeholder.svg",
      summary: "Identify and articulate who your highest valued customers are - Who they are, What they do-feel-think and how you can engage them.",
      link: "#"
    },
    {
      title: "Voice of Customer Review",
      logo: "acclerate-placeholder.svg",
      summary: "Get a grasp of exactly what the state of play is from your customer’s perspective by listening to them and act on their feedback.",
      link: "#"
    },
    {
      title: "CX Strategy Consulting",
      logo: "acclerate-placeholder.svg",
      summary: "A tailored approach and strategic framework to help you deliver best-in-class customer experience and commercial outcomes.",
      link: "#"
    },
    {
      title: "Customer Journey Mapping",
      logo: "acclerate-placeholder.svg",
      summary: "A holistic understanding of who your customers are and what matters the most to them at each point in their journey with your brand.",
      link: "#"
    },
    {
      title: "Conversational Experience",
      logo: "acclerate-placeholder.svg",
      summary: "Deliver a prompt and frictionless experience to your customers by providing their channel of choice and leverage Chatbot/Livechat & AI.",
      link: "#"
    },
    {
      title: "Service Blueprint",
      logo: "",
      summary: "A complete picture of your customer & employee journeys which will be a key enabler of your service, operation, process design and optimisation.",
      link: "#"
    },
    {
      title: "Service Blueprint",
      logo: "",
      summary: "Lorem ipsum dolor sit amet, consectet adipiscing elit. Porta eu, auctor sodales massa, vitae. Vel. Lorem ipsum dolor sit amet, consectet",
      link: "#"
    },
    {
      title: "Omnichannel CX Strategy",
      logo: "",
      summary: "Identify innovation opportunities to deliver fully-connected customer experiences that engage and convert more across various channels of choice.",
      link: "#"
    },
    {
      title: "CX Program & Operation Consulting",
      logo: "",
      summary: "Examining the operating process, governance and systems which organically support the ideal execution of your customer experience programs.",
      link: "#"
    },
    {
      title: "EX Strategy Consulting",
      logo: "",
      summary: "Getting into the mind of your team, determine their satisfaction level and identify drivers and opportunities to strengthen your employee experience.",
      link: "#"
    },
    {
      title: "CX Innovation Lab",
      logo: "",
      summary: "CX Innovation Partnership based on our Evolution framework. The aim is to design, build and validate a ground breaking CX innovation.",
      link: "#"
    }
  ]

  const rangeArray = maturityMatrix.filter((item) => {
    let stage;
    // console.log('totalScore', totalScore);
    // console.log('min', item.stage.range[0]);
    // console.log('max', item.stage.range[1]);
    if (totalRadioValue >= item.stage.range[0] && totalRadioValue <= item.stage.range[1]) {
        stage = item;
    }
    return stage;
});
const range = rangeArray[0];

const acclerateItems = range.acclerate.map((i) => {
    const a = acclerate.filter((item) => {
        let check;
        if (i === item.title) {
            check = item;
        }
        return check;
    })
    return a[0];
});

  return (
    <>
      
      {formSubmitted === 3 ? <ResultBanner range={range} radioValue={radioValue}/> : <Banner count={count}
        setCount={setCount}
        questions={questions}
        bar={bar}
        formSubmitted={formSubmitted} />}
      {formSubmitted === 0 && <EmailForm setFormSubmitted={setFormSubmitted} />}
      {formSubmitted === 1 && (
        <Questions
          setFormSubmitted={setFormSubmitted}
          count={count}
          setCount={setCount}
          questions={questions}
          bar={bar}
          setBar={setBar}
          radioValue={radioValue}
          setRadioValue={setRadioValue}
         
        />
      )}
      {formSubmitted === 2 && <ResultForm  radioValue={radioValue} setRadioValue={setRadioValue}  setTotalRadioValue={setTotalRadioValue} setFormSubmitted={setFormSubmitted}/>}
      {formSubmitted === 3 && <ResultPage maturityMatrix={maturityMatrix} totalRadioValue={totalRadioValue} acclerate={acclerate} acclerateItems={acclerateItems} range={range}/>}
    </>
  );
};
