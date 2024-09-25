import React from "react";

const landingPage = () => {
    return (
        <div className=" w-full flex flex-col items-center ">
            <div >
                <h1 className="text-3xl ">
                    Solved <span className="opacity-50">the core of coding</span>{" "}
                    <span className=" underline underline-offset-4 ">Algorithms</span>, <span className="opacity-50">not just the hyped</span>{" "}
                    Questions.
                </h1>
                <p className="pt-3">
                    Move beyond the hype of interview prep by mastering algorithms that
                    build a lasting foundation for your tech career.
                </p>
                <p className="pt-2">
                    In today’s competitive tech landscape, it’s easy to get caught up in
                    memorizing popular coding questions for job interviews. Algorithms are
                    the backbone of coding, helping you approach complex challenges with
                    clarity and creativity.
                </p>
            </div>
        </div>
    );
};

export default landingPage;
