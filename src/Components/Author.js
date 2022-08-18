import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ListItemComponent from './ListItemComponent';

const Author = () => {
    const [pageNumber,setPageNumber]=useState(1)
    const { data, isLoading } = useQuery(['authors',pageNumber], () => fetch(`http://api.quotable.io/authors?page=${pageNumber}`).then(res => res.json()))
    if (isLoading) {
        return <>Loading...</>
    }

    const authors = data?.results
    // console.log(authors)
    console.log(data.page)

    return (
        <div className='px-12 py-12 '>
            <div className='flex flex-wrap gap-5 justify-center'>
                {
                    authors.map(author => <ListItemComponent
                        key={author._id}
                        author={author}
                    />)
                }
            </div>

            <div class="btn-group mt-5 flex justify-center">
                <button onClick={()=>setPageNumber(pageNumber-1)} disabled={pageNumber<2} class="btn">«</button>
                <button class="btn">Page {data.page}</button>
                <button  onClick={()=>setPageNumber(pageNumber+1)} class="btn">»</button>
            </div>

        </div>
    );
};

export default Author;