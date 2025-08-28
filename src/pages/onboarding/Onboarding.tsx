import onBoardingImg1 from "../../assets/icons/animation flaves/all.svg"
import Arrow from "../../assets/icons/arrow.svg"

const Onboarding = () => {
  return (
    <div className="flex flex-col justify-between px-6 py-10 w-full min-h-screen font-calibri">
      <div className="arrow">
        <img src={Arrow} alt="arrow img-arrow icon_arrow" className="w-[24px] h-[24px]" />
      </div>
      <div className="flex justify-center items-center pt-10 img">
        <img src={onBoardingImg1} alt="carrot vegetable" className="w-[250px]" />
      </div>
      <div className="pt-10 text">
        <h1 className="font-calibri text-5xl text-center">Find Recipes from what you have at home</h1>
      </div>
      <div className="flex justify-center items-center pt-10 button">
        <button className="bg-[#FE8D51] px-24 py-5 rounded-2xl text-[#fefefe]">Next</button>
      </div>
    </div>
  )
}

export default Onboarding
