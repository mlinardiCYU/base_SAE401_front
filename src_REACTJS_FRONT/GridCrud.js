import React from "react";
import { Grid } from 'smart-webcomponents-react/grid';
import 'smart-webcomponents-react/source/styles/smart.default.css';

const appearance = {
    alternationStart: 0,
    alternationCount: 2
}

const sorting = {
    enabled: true
}

const selection = {
    enabled: true,
    checkBoxes: {
        enabled: true
    }
}

const  filtering = {
    enabled: true
}

const grouping = {
    enabled: true,
    renderMode: 'basic'
}



const dataSource = new window.Smart.DataAdapter({
    dataSource: 'http://localhost/restAPI/getItems.php',
    dataSourceType: 'json',
    dataFields: [
        'id: number',
        'name: string',
        'description: string'
    ]
})

const columns = [{
    label: 'Id item',
    dataField: 'id'
},
{
    label: 'Name',
    dataField: 'name'
},
{
    label: 'Description',
    dataField: 'description'
}
];

const paging = {
    enabled: true
};

const pager = {
    visible: true
};

const editing = {
    enabled: true,
    mode: 'row',
    action: 'none',
    dialog: {
        enabled: true
    },
    commandColumn: {
        visible: true,
        position: 'far'
    }
};

const behavior = {
    columnResizeMode: 'growAndShrink'
}


function GridCrud() 
{ 
    return (
        <div>

                <Grid dataSource={dataSource} 
                dataSource={dataSource}
                columns={columns}
                appearance={appearance}
                behavior={behavior}
                selection={selection}
                paging={paging}
                pager={pager}
                sorting={sorting}
                editing={editing}></Grid>



	</div>
    );
	
}



export default GridCrud;