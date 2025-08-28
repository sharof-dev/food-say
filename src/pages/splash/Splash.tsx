import Logo from "../../assets/icons/logo all.svg"

const Splash = () => {
  return (
    <div className="flex flex-col justify-between items-center p-10 w-full min-h-screen">
      <div className="flex justify-center items-center mb-20 logo">
        <img src={Logo} alt="logo food-image" className="w-[295px] h-[296px]" />
      </div>
      <div className="text">
        <h1 className="text-red-800">Powered by Top Doctor</h1>
      </div>
    </div>
  )
}

export default Splash
