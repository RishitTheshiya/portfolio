export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#">
                    <img src="/assets/logo6.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo4.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block mix-blend-none" />
                </a>


                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:rishitpatel2005@gmail.com">rishitpatel2005@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <a href="#">Rishit Theshiya</a>. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="https://github.com/RishitTheshiya/">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/rishit-theshiya">LinkedIn</a></li>
                    <li><a target='_blank' href="https://x.com/Rishit_theshiya">Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}