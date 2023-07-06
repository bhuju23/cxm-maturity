import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

// import Chart from 'chart.js/auto';



export const ResultBanner = (props) => {
    // const radar = useRef(null)

    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
    );

    const data = {
        labels: ['Vision', 'Strategic Focus', 'Measurement','Leadership','Skills', 'Customer Centricity', 'Readiness', 'Decision Making', 'Insights', 'Personalisation' ],
        datasets: [
          {
            // data: computedData,
            data: props.radioValue,
            // data: [2, 5, 4, 5, 4, 3, 2, 1, 1, 2],
            // data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            fill: true,
            backgroundColor: 'rgba(254, 82, 11, 0.8)',
            borderColor: '#FE520B',
            pointBackgroundColor: '#FE520B',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#fff',
            pointRadius: 0 // remove points,
          }
        ]
      };

      const options = {
        plugins: {
            legend: false, // Hide legend,
            customCanvasBackgroundColor: {
              color: 'transparent'
            }
          },
          scales: {
            r: {
              beginAtZero: true,
              min: 0,
              max: 5,
              ticks: {
                stepSize: 1,
                display: false, // hide ticks,
                color: 'red'
              },
              angleLines: false,
              grid: {
                color: '#fff',
                lineWidth: 2
              },

              border: {
                // dotted line
                dash: (item) => {
                  if (item.index === 5) {
                    return [0];
                  }
                  return [5, 5];
                }
              },
              pointLabels: {
                color: '#fff',
                font: {
                  size: () => {
                    let fontSize = 14;
                    if (window.outerWidth < 768) {
                      fontSize = 10;
                    }
                    console.log('Lable Font size: ', fontSize);
                    return fontSize;
                  },
                  family: 'montserrat,sans-serif',
                  weight: 600
                }
              }
            }
          }
      };
    
  
      
    //   useEffect(()=> {
       

  
        
       
    //     const customCanvasBackgroundColor = {
    //         id: 'customCanvasBackgroundColor',
    //         beforeDraw: (chart, args, options) => {
    //           const { ctx } = chart;
    //           ctx.save();
    //           ctx.globalCompositeOperation = 'destination-over';
    //           ctx.fillStyle = options.color || 'transparent';
    //           ctx.fillRect(0, 0, chart.width, chart.height);
    //           ctx.restore();
    //         }
    //       };
    //       const radarChart = radar.current;
 
    //     const chart = new ChartJS(radarChart, {
    //         type: 'radar',
    //         data: data,
    //         options: {
    //           plugins: {
    //             legend: false, // Hide legend,
    //             customCanvasBackgroundColor: {
    //               color: 'transparent'
    //             }
    //           },
    //           scales: {
    //             r: {
    //               beginAtZero: true,
    //               min: 0,
    //               max: 5,
    //               ticks: {
    //                 stepSize: 1,
    //                 display: false, // hide ticks,
    //                 color: 'red'
    //               },
    //               angleLines: false,
    //               grid: {
    //                 color: '#fff',
    //                 lineWidth: 2
    //               },
        
    //               border: {
    //                 // dotted line
    //                 dash: (item) => {
    //                   if (item.index === 5) {
    //                     return [0];
    //                   }
    //                   return [5, 5];
    //                 }
    //               },
    //               pointLabels: {
    //                 color: '#fff',
    //                 font: {
    //                   size: () => {
    //                     let fontSize = 14;
    //                     if (window.outerWidth < 768) {
    //                       fontSize = 10;
    //                     }
    //                     console.log('Lable Font size: ', fontSize);
    //                     return fontSize;
    //                   },
    //                   family: 'montserrat,sans-serif',
    //                   weight: 600
    //                 }
    //               }
    //             }
    //           }
    //         },
    //         plugins: [customCanvasBackgroundColor]
    //       });
    //       console.log(radarChart)
        
    //   }, [])

    return (
        <>
            <div className="flex min-h-[618px] flex-wrap items-center bg-navy-700 pt-24 pb-8 text-white">
                <div className="w-full">
                    <div className="o-container">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 mb-8 md:col-span-6 md:mb-0">
                                <span className="mb-0 text-lg font-semibold text-reso-dark">
                                    <span >{props.range.stage.number}</span>
                                </span>
                                <h1 className="relative pb-4 text-5xl font-semibold leading-none lg:text-7xl">
                                    <span>{props.range.stage.title}</span>
                                    <span className="absolute left-0 bottom-0 block h-[2px] w-[72px] bg-yellow-600"></span>
                                </h1>
                                <div className="pt-6 lg:pt-11">
                                    <span className="leading-8 lg:text-2xl" dangerouslySetInnerHTML={{ __html: props.range.stage.summary }}></span>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-5 md:col-start-8">
                                <div className="text-center text-xl font-semibold"><span className="text-white">Your CX Maturity Map</span></div>
                                <div className="flex justify-center" style={{position: 'relative', height:'100% ', width:'100%'}} >
                                    {/* <canvas ref={radar} className="mx-auto h-full  w-full  bg-navy-700 "></canvas> */}
                                    <div className='max-h-[380px] max-w-[480px] h-full w-full flex justify-center'>
                                    <Radar data={data} options={options}/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}