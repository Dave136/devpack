import { useEffect, useState } from 'react';
import Table, { Column } from 'react-base-table';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { getUsers } from '@/services/user';
import Pagination from '@/components/pagination';
import Search from '@/components/search';
import UserModal from '@/components/user/user-modal';
import usePageCount from '@/hooks/use-page-count';
import useViewport from '@/hooks/use-viewport';
import useLockOverflow from '@/hooks/use-lock-overflow';
import 'react-base-table/styles.css';

import type { ApiUserResponse, User as IUser } from '@/types';
import Empty from '@/components/user/empty';

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page')) ?? 0;
  const query = url.searchParams.get('q');
  const data = await getUsers({
    page,
    query,
  });
  return { data, q: query };
}

const User = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, q } = useLoaderData() as { data: ApiUserResponse; q: string };
  const pageCount = usePageCount({
    total: data?.total,
  });
  const navigate = useNavigate();
  const navigation = useNavigation();
  const viewport = useViewport();

  useLockOverflow(showModal);

  const closeModal = () => {
    setShowModal(false);
    setUser(null);
  };

  const emptyRenderer = () => {
    if (navigation.state === 'loading') {
      return <Empty>Getting data...</Empty>;
    }

    if (!data.users.length) {
      return <Empty>No users found</Empty>;
    }
  };

  useEffect(() => {
    if (currentPage === 1) {
      navigate('/user');
    }
  }, [currentPage]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    setCurrentPage(newPage);
    navigate({
      search: `page=${newPage}`,
    });
  };

  const columns = [
    {
      title: 'Photo',
      key: 'image',
      dataKey: 'image',
      width: 150,
      align: 'center',
      headerClassName: 'text-[10px] font-bold text-gray-900 dark:text-gray-300',
      cellRenderer: ({ rowData }: { rowData: IUser }) => (
        <img src={rowData.image} className="w-6" />
      ),
    },
    {
      title: 'Usuario',
      key: 'username',
      dataKey: 'username',
      sortable: true,
      headerClassName: 'text-[10px] font-bold text-gray-900 dark:text-gray-300',
      width: 150,
    },
    {
      title: 'Nombre',
      key: 'firstName',
      dataKey: 'firstName',
      headerClassName: 'text-[10px] font-bold text-gray-900 dark:text-gray-300',
      width: 150,
    },
    {
      title: 'Apellido',
      key: 'lastName',
      dataKey: 'lastName',
      headerClassName: 'text-[10px] font-bold text-gray-900 dark:text-gray-300',
      width: 150,
    },
    {
      title: 'Edad',
      key: 'age',
      dataKey: 'age',
      headerClassName: 'text-[10px] font-bold text-gray-900 dark:text-gray-300',
      width: 80,
    },
    {
      title: 'IP',
      key: 'ip',
      dataKey: 'ip',
      headerClassName: 'text-[10px] font-bold text-gray-900 dark:text-gray-300',
      width: 250,
    },
  ];

  const getTableStyle = () => {
    if (viewport.mobile || viewport.table) {
      return 'overflow-x-scroll';
    }
    return '';
  };

  return (
    <>
      <div className="max-w-2xl mx-auto my-8">
        <div>
          <Search q={q} />
        </div>
        <div className={getTableStyle()}>
          <Table
            data={data.users}
            width={660}
            height={400}
            emptyRenderer={emptyRenderer}
            sortBy={{
              key: 'username',
              order: 'asc',
            }}
            rowEventHandlers={{
              onClick: ({ rowData }) => {
                setUser(rowData);
                setShowModal(true);
              },
            }}
            className="cursor-pointer dark:shadow-none dark:bg-dark-500"
            headerClassName="dark:(bg-dark-300 text-gray-400 border-transparent)"
            rowClassName="dark:(bg-dark-400 border-dark-200)"
          >
            {columns.map((column) => (
              <Column
                title={column.title}
                key={column.key}
                dataKey={column.dataKey}
                width={column.width}
                headerClassName={column.headerClassName}
                cellRenderer={column?.cellRenderer && column.cellRenderer}
                sortable={column.sortable}
              />
            ))}
          </Table>
        </div>
        <div className="py-8 mt-8 flex justify-center">
          <Pagination
            pageCount={pageCount}
            page={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      {user && (
        <UserModal user={user} active={showModal} onClose={closeModal} />
      )}
    </>
  );
};

export default User;
