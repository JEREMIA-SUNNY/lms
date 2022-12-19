import VideoStatus from "./videoStatus";
import StartAssesment from './startAssessment'

const modules = [
    { status: 'Biginner' },
    { status: 'Master' },
    { status: 'Intermediate' },
]

const CourseModule = ({ id }) => {
    return (
        <div className="mt-4">
            <details className="w-full bg-white p-4 shadow bg-[#F5F5F5] rounded  group mx-auto overflow-hidden transition-[max-height] duration-500 overflow-hidden">
                <summary
                    className="flex items-start outline-none cursor-pointer marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]"
                >
                    <div className="ml-8">
                        <h4>Module {id}</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium</p>
                    </div>
                </summary>
                <hr className="my-2 scale-x-150" />
                <div className="-m-4 -mt-2 p-4 bg-gray-50">
                    <div className="my-4 w-full grid grid-cols-4 gap-5">
                        {
                            modules.map((item,i ) => {
                                return (
                                    <VideoStatus item={item} key={i} />
                                )
                            })
                        }
                        {/* <a href="/new" className="hover:border-[#409a00] hover:border-solid hover:bg-white hover:text-[#409a00] group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                            <svg className="group-hover:text-[#409a00] mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                            </svg>
                            New project
                        </a> */}
                        <StartAssesment />
                    </div>
                </div>
            </details>
        </div>
    )
}

export default CourseModule;