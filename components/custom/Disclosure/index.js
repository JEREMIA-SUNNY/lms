

const Disclosure = () => {
    return (
        <section className="w-screen h-screen pt-20">
            <details open className="w-96 bg-white p-4 rounded-xl shadow-lg group mx-auto max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500 overflow-hidden">
                <summary
                    className="outline-none cursor-pointer focus:underline focus:text-green-600 font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]"
                >
                    Title
                </summary>

                <hr className="my-2 scale-x-150" />

                <div className="text-sm -m-4 -mt-2 p-4 bg-gray-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium nisi
                    at turpis euismod malesuada. Nulla ultrices ullamcorper justo, ut aliquet
                    purus lacinia vitae. Nunc vitae tempus odio, nec molestie magna. Proin non
                    tortor enim. Fusce eget dui enim. Phasellus tristique vitae arcu molestie
                    porta. Etiam vitae dui sed lorem viverra pulvinar ac sed ligula. Etiam
                    hendrerit felis risus, in laoreet dui viverra eget. Nunc lobortis turpis
                    tellus, ac dignissim felis suscipit sed. Cras consequat, erat eget
                    lobortis vehicula, velit justo consectetur dolor, sit amet pretium elit
                    tortor eget est. Phasellus ut laoreet lacus, ut tincidunt sem.
                </div>
            </details>
        </section>
    )
}

export default Disclosure;