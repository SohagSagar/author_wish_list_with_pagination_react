import React from 'react';

const ListItemComponent = () => {
    return (
        <div class="card w-96 bg-base-100 border">
            <div class="card-body">
                <h2 class="text-center text-lg font-semibold">Author Details</h2><hr />
                <div class="overflow-x-auto">
                    <table class="table w-full table-compact">
                        {/* <!-- head --> */} 
                        
                        <tbody>
                            {/* <!-- row 1 --> */}
                            
                            <tr>
                                <th>Name</th>
                                <td>Cy Ganderton</td>
                            </tr>
                            <tr>
                                <th>Bio</th>
                                <td>Cy Ganderton</td>
                            </tr>
                            <tr>
                                <th>Link</th>
                                <td>Cy Ganderton</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div class="card-actions justify-center">
                    <button class="btn btn-sm bg-green-600 rounded-full normal-case text-white border-none">Add to favourite</button>
                </div>
            </div>
        </div>
    );
};

export default ListItemComponent;