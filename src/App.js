
export default function App() {
  return (
    <div className="w-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gray-5 dark:bg-gray-900 0 h-1/2 flex">

        <div className="basis-1/3 h-4/5 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl ml-4 mt-10 my-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">

          <div className=" flex flex-col h-5/6 dark:text-white">
            <img src="img/my-photo.jpg" alt="profile photo" className="w-40 h-40 mx-auto mt-8 object-cover rounded-full" />
            <div className="text-center text-xl font-bold mt-6">전현우</div>
            <div className="text-center text-xl font-bold mb-2">Hyunwoo Jeon</div>
          </div>

          <div className="flex justify-center  h-1/6 py-2">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-4 text-white rounded-lg p-1  mx-2 text-center flex flex-col justify-center hover:ring-2 hover:ring-pink-400 transition hover:ring-offset-2">
              <a href="https://www.instagram.com/hyun_woo0228/">Instgram</a>
            </div>
            <div className="bg-yellow-500 px-4 text-white rounded-lg p-1  mx-2 text-center flex flex-col justify-center hover:ring-2 hover:ring-yellow-400 transition hover:ring-offset-2">
              <a href="http://qr.kakao.com/talk/IUz_GDSbPlmQ97pFwP84l1vXQag-">KakaoTalk</a>
            </div>
          </div>
        </div>

        <div className="basis-2/3 h-min my-auto">
          <div className="m-4 p-2 h-full flex flex-col dark:text-white">
            <div className="text-2xl font-bold my-4">안녕하세요!</div>
            <div className="text-lg">저는 충남삼성고등학교에 재학중인 전현우입니다. 인공지능, 웹, 앱 등 다양한 분야에 관심이 많아 여러 분야에서 공부하고 있습니다.</div>
          </div>
        </div>

      </div>

      <div className="flex flex-col p-4 bg-gray-50 dark:bg-gray-900">
        <div className=" text-4xl font-bold dark:text-white">Profile</div>
        <div className="my-4 text-xl font-semibold p-2 ">

          <div className="bg-gray-50 shadow-lg p-2 rounded-xl hover:ring-4 hover:ring-offset-4 transition hover:ring-sky-400 dark:bg-gray-800 hover:dark:ring-sky-800 dark:text-white dark:ring-offset-gray-800">
            <div className="font-bold text-2xl text-center">Basic</div>
            <div className="my-2 ml-4">이름: 전현우</div>
            <div className="my-2 ml-4">생년월일: 2005년 2월 28일</div>
            <div className="my-2 ml-4">학교: 충남삼성고등학교</div>
          </div>

          <div className="bg-gray-50 shadow-lg p-2 mt-4 rounded-xl hover:ring-4 hover:ring-offset-4 transition hover:ring-sky-400 dark:bg-gray-800 hover:dark:ring-sky-800 dark:text-white dark:ring-offset-gray-800">
            <div className="my-2 text-center text-2xl font-bold">Academic</div>
            <div className="my-2 ml-4">탕정초등학교 (2012 ~ 2017)</div>
            <div className="my-2 ml-4">BIS Hanoi (2017 ~ 2019)</div>
            <div className="my-2 ml-4">탕정중학교 (2019 ~ 2020)</div>
            <div className="my-2 ml-4">충남삼성고등학교 (2021 ~ )</div>
          </div>

        </div>
      </div>

      <div className="flex flex-col p-4 bg-gray-50 dark:bg-gray-900">
        <div className="text-4xl font-bold my-2 dark:text-white">Skills</div>
        <div className="flex flex-wrap justify-center">
          <div className="bg-gray-50 dark:bg-gray-800 dark:text-white m-2 p-4 shadow-xl rounded-xl w-60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 dark:hover:bg-indigo-800 hover:text-white duration-300">
            <div className="text-2xl font-bold">Programming Language</div>
            <div className="my-2 font-bold">
              <div className="ml-2 my-1">Python</div>
              <div className="ml-2 my-1">Javascript</div>
              <div className="ml-2 my-1">C Language</div>
              <div className="ml-2 my-1">Typescript</div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 dark:text-white m-2 p-4 shadow-xl rounded-xl w-60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 dark:hover:bg-violet-800 hover:text-white duration-300">
            <div className="text-2xl font-bold">Framework</div>
            <div className="my-2 font-bold">
              <div className="ml-2 my-1">Next.js</div>
              <div className="ml-2 my-1">Create React App</div>
              <div className="ml-2 my-1">React Native</div>
              <div className="ml-2 my-1">Django</div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 dark:text-white m-2 p-4 shadow-xl rounded-xl w-60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-rose-600 dark:hover:bg-rose-800 hover:text-white duration-300">
            <div className="text-2xl font-bold">Others</div>
            <div className="my-2 font-bold">
              <div className="ml-2 my-1">AWS</div>
              <div className="ml-2 my-1">Vercel</div>
              <div className="ml-2 my-1">Prisma</div>
              <div className="ml-2 my-1">Amplify</div>
              <div className="ml-2 my-1">Tensorflow</div>
              <div className="ml-2 my-1">Pytorch</div>
              <div className="ml-2 my-1">React</div>
              <div className="ml-2 my-1">Tailwind CSS</div>
            </div>
          </div>

        </div>
      </div>
      <footer className="text-center text-gray-700 p-4 bg-gray- dark:bg-gray-900 dark:text-white">
        <div>Copyright jhyunwoo0228@gmail.com</div>
      </footer>
    </div>
  )
}
