import React from 'react';

const ListItemComponent = ({author}) => {
    const {name,bio,link} = author;
    return (
        <div class="card w-[500px] bg-base-100 border">
            <div class="card-body p-3">
                <h2 class="text-center text-lg font-semibold p-0">Author Details</h2><hr />
                
                    <table class="table w-full table-compact">
                        {/* <!-- head --> */} 
                        
                        <tbody>
                            {/* <!-- row 1 --> */}
                            
                            <tr>
                                <th>Name</th>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th>Bio</th>
                                <td><textarea defaultValue={bio} readOnly class="textarea w-full h-24 p-0 bg-transparent resize-none "></textarea></td>
                            </tr>
                            <tr>
                                <th>Link</th>
                                <td><a href={link} target='blank'>Details</a></td>
                            </tr>
                            
                        </tbody>
                    </table><hr />
                
                <div class="card-actions justify-center">
                    <button class="btn btn-sm bg-green-600 rounded-full normal-case text-white border-none">Add to favourite</button>
                </div>
            </div>
        </div>
    );
};

export default ListItemComponent;