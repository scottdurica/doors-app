import React from 'react'

const Create = () => {
  return (
            <AuthenticatedLayout
            header={
                <div className="flex justify-between ">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        My Quotes
                    </h2>
                    <Link href="quotes/create" className= 'underline font-bold '> Start New Quote</Link>
                </div>
            }
        >
            <Head title="New Quote" />
            <CreateQuoteForm ></CreateQuoteForm>
        </AuthenticatedLayout>
  )
}

export default Create