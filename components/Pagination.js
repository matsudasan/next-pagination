import Router from 'next/router'

export default function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
 
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    function Paginate(number) {
        Router.push(`/?page=${number}`)
        paginate(number)

        // console.log(click)
        //console.log(e.target.className)
        //item.current.classList.add("color")
        //console.log("クラスリスト:"+item.current.classList)
        //console.log("クラスネーム:"+item.current.className)
        //console.log("itemがあるかどうか:"+item.current.className.includes("item"))
        //console.log(!item.current.contains(e.target) || item.current.className.includes("item"))
        //console.log("範囲内をクリック"+item.current.contains(e.target))
        //console.log("範囲外をクリック"+!item.current.contains(e.target))

        /*if (item.current.contains(e.target)) {
            console.log("付与?")

            if (item.current.className.includes("color")) {
                console.log("はずす確定")
                return item.current.classList.remove("color")
            } else {
                console.log("付与確定")
                return item.current.classList.add("color")
            }

        }else{
            console.log("画面外")
        }*/

    }
    return (
        <>
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number => {
                        let active = number === currentPage ? "active" :"";
                        return (
                            <li key={number} className={`page-item ${active}`} onClick={() => Paginate(number)}>
                                <a className='page-link' >
                                    {number}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <style jsx>{`
            .pagination{
                display:flex;
                height:30px;
            }
            .page-item{
                border: 1px solid #d7d2cd;
                width:30px;
                cursor:pointer;
                text-align:center;

            }
            .page-link{
                display:block;
                line-height:30px;
            }
            .active{
                background-color:#666666;
            }
            `}</style>
        </>
    );
};